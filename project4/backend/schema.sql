DROP TABLE IF EXISTS reservation;
DROP TABLE IF EXISTS flight;
DROP TABLE IF EXISTS passenger;
DROP TABLE IF EXISTS aircraft;

CREATE TABLE aircraft (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    model TEXT NOT NULL,
    capacity INTEGER NOT NULL
);

CREATE TABLE passenger (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    passenger_id TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL
);

CREATE TABLE flight (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    flight_number TEXT NOT NULL UNIQUE,
    origin TEXT NOT NULL,
    destination TEXT NOT NULL,
    departure_time DATETIME NOT NULL,
    aircraft_id INTEGER NOT NULL,
    FOREIGN KEY (aircraft_id) REFERENCES aircraft (id)
);

CREATE TABLE reservation (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    flight_id INTEGER NOT NULL,
    passenger_id INTEGER NOT NULL,
    seat_number TEXT NOT NULL,
    FOREIGN KEY (flight_id) REFERENCES flight (id),
    FOREIGN KEY (passenger_id) REFERENCES passenger (id)
);
