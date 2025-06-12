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
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(basedir, 'food_orders.db')}"
db = SQLAlchemy(app)

class Restaurant(db.Model):
    __tablename__ = 'restaurant'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=True)
    region = db.Column(db.String, nullable=False)
    orders = db.relationship("FoodOrder", backref="restaurant")

class Customer(db.Model):
    __tablename__ = 'customer'
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    orders = db.relationship("FoodOrder", backref="customer")

class FoodOrder(db.Model):
    __tablename__ = 'food_order'
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurant.id'), nullable=False)
    order_time = db.Column(db.DateTime, nullable=False)
    delivery_time = db.Column(db.DateTime)
    review = db.relationship("Review", backref="order", uselist=False)

class Review(db.Model):
    __tablename__ = 'review'
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('food_order.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.Text)

def setup_database(app):
    with app.app_context():
        print("Creating food order system database tables...")
        db.create_all()
        print("Database tables created.")

queries = load_queries('queries.sql')

@app.route('/')
def home():
    return "Food Order Tracking System Backend"

@app.route('/restaurants/popular-by-region')
def get_popular_restaurants():
    result = db.session.execute(text(queries['popular_by_region']))
    return jsonify([dict(row._mapping) for row in result])

@app.route('/restaurants/avg-delivery-time')
def get_avg_delivery_time():
    result = db.session.execute(text(queries['avg_delivery_time']))
    return jsonify([dict(row._mapping) for row in result])

@app.route('/restaurants/top-raters/<restaurant_name>')
def get_top_raters(restaurant_name):
    result = db.session.execute(text(queries['top_raters']), {'restaurant_name': restaurant_name})
    return jsonify([dict(row._mapping) for row in result])

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'init-db':
        setup_database(app)
    else:
        app.run(debug=True)
