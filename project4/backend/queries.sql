-- name: filled_flights
SELECT
    f.flight_number,
    f.destination,
    f.departure_time,
    a.capacity
FROM
    flight f
JOIN
    aircraft a ON f.aircraft_id = a.id
LEFT JOIN
    reservation r ON f.id = r.flight_id
GROUP BY
    f.id
HAVING
    COUNT(r.id) >= a.capacity;

-- name: frequent_flyers
SELECT
    p.name,
    COUNT(r.id) as flight_count
FROM
    passenger p
JOIN
    reservation r ON p.id = r.passenger_id
JOIN
    flight f ON r.flight_id = f.id
WHERE
    f.departure_time >= date('now', '-1 month')
GROUP BY
    p.id
HAVING
    COUNT(r.id) > 3;

-- name: occupancy_rate
SELECT
    f.destination,
    (CAST(COUNT(r.id) AS REAL) / a.capacity) * 100 AS occupancy_percentage
FROM
    flight f
JOIN
    aircraft a ON f.aircraft_id = a.id
LEFT JOIN
    reservation r ON f.id = r.flight_id
GROUP BY
    f.destination;
