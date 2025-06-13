-- name: popular_by_region
WITH RankedRestaurants AS (
    SELECT
        r.region,
        r.name,
        COUNT(fo.id) AS order_count,
        ROW_NUMBER() OVER(PARTITION BY r.region ORDER BY COUNT(fo.id) DESC) as rn
    FROM
        restaurant r
    JOIN
        food_order fo ON r.id = fo.restaurant_id
    GROUP BY
        r.id
)
SELECT
    region,
    name AS most_popular
FROM
    RankedRestaurants
WHERE
    rn = 1;

-- name: avg_delivery_time
SELECT
    r.name,
    CAST(AVG(JULIANDAY(fo.delivery_time) - JULIANDAY(fo.order_time)) * 24 * 60 AS INTEGER) as avg_minutes
FROM
    restaurant r
JOIN
    food_order fo ON r.id = fo.restaurant_id
WHERE
    fo.delivery_time IS NOT NULL
GROUP BY
    r.id;

-- name: top_raters
SELECT
    c.name,
    rev.rating,
    rev.comment
FROM
    customer c
JOIN
    food_order fo ON c.id = fo.customer_id
JOIN
    review rev ON fo.id = rev.order_id
JOIN
    restaurant r ON fo.restaurant_id = r.id
WHERE
    r.name = :restaurant_name AND rev.rating = 5;
