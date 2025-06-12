DELETE FROM reservation;
DELETE FROM flight;
DELETE FROM passenger;
DELETE FROM aircraft;

-- Insert aircrafts
INSERT INTO aircraft (id, model, capacity) VALUES
(1, 'Boeing 737', 3), -- Smaller capacity for testing
(2, 'Airbus A320', 180),
(3, 'Boeing 777', 300);

-- Insert passengers
INSERT INTO passenger (id, passenger_id, name) VALUES
(1, 'P-1001', 'نگار جعفری'), -- Will be a frequent flyer
(2, 'P-1002', 'امیرحسین زمانی'),
(3, 'P-1003', 'آرش مرادی'),
(4, 'P-1004', 'سارا خالقی');

-- Insert flights
INSERT INTO flight (id, flight_number, origin, destination, departure_time, aircraft_id) VALUES
(1, 'IR-255', 'تهران', 'شیراز', datetime('now', '+1 day'), 1), -- Will be filled
(2, 'TK-879', 'تهران', 'استانبول', datetime('now', '+2 days'), 2),
(3, 'QH-452', 'تهران', 'کیش', datetime('now', '+3 days'), 2),
(4, 'IR-660', 'تهران', 'مشهد', datetime('now', '-5 days'), 3), -- In the past
(5, 'IR-661', 'تهران', 'مشهد', datetime('now', '-10 days'), 3), -- In the past
(6, 'IR-662', 'تهران', 'مشهد', datetime('now', '-15 days'), 3), -- In the past
(7, 'IR-663', 'تهران', 'مشهد', datetime('now', '-20 days'), 3); -- In the past

-- Make flight 1 (IR-255) filled to capacity
INSERT INTO reservation (flight_id, passenger_id, seat_number) VALUES
(1, 2, '1A'),
(1, 3, '1B'),
(1, 4, '1C');

-- Give Negin Jafari (P-1001) 4 flights in the last month to make her a frequent flyer
INSERT INTO reservation (flight_id, passenger_id, seat_number) VALUES
(4, 1, '10A'),
(5, 1, '11B'),
(6, 1, '12C'),
(7, 1, '13D');

-- Add some reservations to other flights for occupancy rate
INSERT INTO reservation (flight_id, passenger_id, seat_number) VALUES
(2, 2, '5A'),
(2, 3, '5B'),
(3, 4, '6A');
