from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from util import load_queries
import os
import sys
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(basedir, 'library.db')}"
db = SQLAlchemy(app)

class Member(db.Model):
    __tablename__ = 'member'
    id = db.Column(db.Integer, primary_key=True)
    member_id = db.Column(db.String, nullable=False, unique=True)
    name = db.Column(db.String, nullable=False)
    loans = db.relationship("Loan", backref="member", cascade="all, delete")

class Book(db.Model):
    __tablename__ = 'book'
    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.String, nullable=False, unique=True)
    title = db.Column(db.String, nullable=False)
    author = db.Column(db.String)
    loans = db.relationship("Loan", backref="book")

class Loan(db.Model):
    __tablename__ = 'loan'
    id = db.Column(db.Integer, primary_key=True)
    member_id = db.Column(db.Integer, db.ForeignKey("member.id"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey("book.id"), nullable=False)
    loan_date = db.Column(db.Date, nullable=False)
    due_date = db.Column(db.Date, nullable=False)
    return_date = db.Column(db.Date)
    fines = db.relationship("Fine", backref="loan", cascade="all, delete")

class Fine(db.Model):
    __tablename__ = 'fine'
    id = db.Column(db.Integer, primary_key=True)
    loan_id = db.Column(db.Integer, db.ForeignKey("loan.id"), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    paid = db.Column(db.Boolean, default=False, nullable=False)

def setup_database(app):
    with app.app_context():
        print("Creating library database tables...")
        db.create_all()
        print("Database tables created.")

queries = load_queries('queries.sql')

@app.route('/')
def home():
    return "Library Management System Backend"

@app.route('/members/late')
def get_late_members():
    result = db.session.execute(text(queries['late_members']))
    return jsonify([dict(row._mapping) for row in result])

@app.route('/books/popular')
def get_popular_books():
    result = db.session.execute(text(queries['popular_books']))
    return jsonify([dict(row._mapping) for row in result])

@app.route('/books/avg-loan-time')
def get_avg_loan_time():
    result = db.session.execute(text(queries['avg_loan_time']))
    return jsonify([dict(row._mapping) for row in result])

@app.route('/fines/unpaid')
def get_unpaid_fines():
    result = db.session.execute(text(queries['unpaid_fines']))
    return jsonify([dict(row._mapping) for row in result])

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'init-db':
        setup_database(app)
    else:
        app.run(debug=True)
