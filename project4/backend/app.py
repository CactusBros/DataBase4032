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
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(basedir, 'flights.db')}"
db = SQLAlchemy(app)

class Aircraft(db.Model):
    __tablename__ = 'aircraft'
    id = db.Column(db.Integer, primary_key=True)
    model = db.Column(db.String, nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    flights = db.relationship("Flight", backref="aircraft")

class Passenger(db.Model):
    __tablename__ = 'passenger'
    id = db.Column(db.Integer, primary_key=True)
    passenger_id = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    reservations = db.relationship("Reservation", backref="passenger")

class Flight(db.Model):
    __tablename__ = 'flight'
    id = db.Column(db.Integer, primary_key=True)
    flight_number = db.Column(db.String, unique=True, nullable=False)
    origin = db.Column(db.String, nullable=False)
    destination = db.Column(db.String, nullable=False)
    departure_time = db.Column(db.DateTime, nullable=False)
    aircraft_id = db.Column(db.Integer, db.ForeignKey('aircraft.id'), nullable=False)
    reservations = db.relationship("Reservation", backref="flight")

class Reservation(db.Model):
    __tablename__ = 'reservation'
    id = db.Column(db.Integer, primary_key=True)
    flight_id = db.Column(db.Integer, db.ForeignKey('flight.id'), nullable=False)
    passenger_id = db.Column(db.Integer, db.ForeignKey('passenger.id'), nullable=False)
    seat_number = db.Column(db.String, nullable=False)

def setup_database(app):
    with app.app_context():
        print("Creating flight system database tables...")
        db.create_all()
        print("Database tables created.")

queries = load_queries('queries.sql')

@app.route('/')
def home():
    return "Flight Management System Backend"

@app.route('/flights/filled')
def get_filled_flights():
    result = db.session.execute(text(queries['filled_flights']))
    return jsonify([dict(row._mapping) for row in result])

@app.route('/passengers/frequent-flyers')
def get_frequent_flyers():
    result = db.session.execute(text(queries['frequent_flyers']))
    return jsonify([dict(row._mapping) for row in result])

@app.route('/flights/occupancy-rate')
def get_occupancy_rate():
    result = db.session.execute(text(queries['occupancy_rate']))
    return jsonify([dict(row._mapping) for row in result])

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'init-db':
        setup_database(app)
    else:
        app.run(debug=True)
