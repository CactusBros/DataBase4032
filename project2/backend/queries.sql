-- name: best_selling_product
SELECT
    p.name AS product_name,
    SUM(oi.quantity) AS total_sold
FROM
    product p
JOIN
    order_item oi ON p.id = oi.product_id
JOIN
    orders o ON oi.order_id = o.id
WHERE
    o.order_date BETWEEN :start_date AND :end_date
GROUP BY
    p.id
ORDER BY
    total_sold DESC
LIMIT 1;

-- name: monthly_sales_by_category
SELECT
    c.name AS category_name,
    STRFTIME('%Y-%m', o.order_date) AS month,
    SUM(p.price * oi.quantity) AS total_sales
FROM
    category c
JOIN
    product p ON c.id = p.category_id
JOIN
    order_item oi ON p.id = oi.product_id
JOIN
    orders o ON oi.order_id = o.id
GROUP BY
    c.name, month
ORDER BY
    month DESC, total_sales DESC;

-- name: low_stock_alert
SELECT
    name,
    stock
FROM
    product
WHERE
    stock < 10;

-- name: top_customers
SELECT
    c.name,
    COUNT(o.id) as purchase_count
FROM
    customer c
JOIN
    orders o ON c.id = o.customer_id
WHERE
    o.order_date >= date('now', '-1 month')
GROUP BY
    c.id
HAVING
    COUNT(o.id) > 5
ORDER BY
    purchase_count DESC;
