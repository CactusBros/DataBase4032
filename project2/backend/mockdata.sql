DELETE FROM order_item;
DELETE FROM "orders";
DELETE FROM product;
DELETE FROM customer;
DELETE FROM category;

-- Insert categories
INSERT INTO category (id, name) VALUES
(1, 'کالای دیجیتال'),
(2, 'لوازم خانگی'),
(3, 'پوشاک');

-- Insert products
INSERT INTO product (id, name, price, stock, category_id) VALUES
(1, 'لپتاپ مدل X', 25000000, 15, 1),
(2, 'گوشی موبایل Y', 12000000, 8, 1), -- Low stock
(3, 'ساعت هوشمند Z', 5000000, 30, 1),
(4, 'یخچال ساید', 45000000, 5, 2), -- Low stock
(5, 'تیشرت نخی', 350000, 100, 3);

-- Insert customers
INSERT INTO customer (id, name, email) VALUES
(1, 'رضا کریمی', 'reza.karimi@example.com'), -- Will be a top customer
(2, 'سارا محمدی', 'sara.mohammadi@example.com');

-- Insert orders for Reza Karimi (6 orders in the last month)
INSERT INTO orders (id, customer_id, order_date) VALUES
(1, 1, date('now', '-2 days')),
(2, 1, date('now', '-5 days')),
(3, 1, date('now', '-10 days')),
(4, 1, date('now', '-15 days')),
(5, 1, date('now', '-20 days')),
(6, 1, date('now', '-25 days'));

-- Insert another order for Sara
INSERT INTO orders (id, customer_id, order_date) VALUES
(7, 2, date('now', '-3 days'));

-- Insert order items
-- Make Laptop the best seller
INSERT INTO order_item (order_id, product_id, quantity) VALUES
(1, 1, 1),
(2, 3, 2),
(3, 1, 1),
(4, 5, 5),
(5, 1, 2),
(6, 2, 1),
(7, 4, 1);
