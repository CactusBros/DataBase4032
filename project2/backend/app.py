from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from util import load_queries
import os
import sys
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(basedir, 'store.db')}"
db = SQLAlchemy(app)

class Category(db.Model):
    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    products = db.relationship("Product", backref="category")

class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    price = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer, default=0, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)

class Customer(db.Model):
    __tablename__ = 'customer'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    orders = db.relationship("Order", backref="customer")

class Order(db.Model):
    __tablename__ = 'orders' # Note: 'order' is a reserved keyword in SQL
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    order_date = db.Column(db.Date, nullable=False)
    items = db.relationship("OrderItem", backref="order", cascade="all, delete")

class OrderItem(db.Model):
    __tablename__ = 'order_item'
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

def setup_database(app):
    with app.app_context():
        db.create_all()

queries = load_queries('queries.sql')

@app.route('/products/best-selling')
def get_best_selling_products():
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    result = db.session.execute(
        text(queries['best_selling_product']),
        {'start_date': start_date, 'end_date': end_date}
    )
    return jsonify([dict(row._mapping) for row in result])

@app.route('/sales/monthly-by-category')
def get_monthly_sales():
    result = db.session.execute(text(queries['monthly_sales_by_category']))
    return jsonify([dict(row._mapping) for row in result])

@app.route('/inventory/low-stock')
def get_low_stock():
    result = db.session.execute(text(queries['low_stock_alert']))
    return jsonify([dict(row._mapping) for row in result])

@app.route('/customers/top')
def get_top_customers():
    result = db.session.execute(text(queries['top_customers']))
    return jsonify([dict(row._mapping) for row in result])

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'init-db':
        setup_database(app)
    else:
        app.run(debug=True)
