DELETE FROM review;
DELETE FROM food_order;
DELETE FROM customer;
DELETE FROM restaurant;

-- Insert restaurants
INSERT INTO restaurant (id, name, region) VALUES
(1, 'رستوران ایتالیایی روما', 'شمال'),
(2, 'کبابی اصیل', 'مرکز'),
(3, 'فست فود سیب', 'غرب'),
(4, 'کافه نادری', 'مرکز'); -- Another restaurant in the center

-- Insert customers
INSERT INTO customer (id, customer_id, name) VALUES
(1, 'C-101', 'کیانوش حقیقی'),
(2, 'C-102', 'پریسا عظیمی'),
(3, 'C-103', 'احمد محمودی');

-- Insert orders
-- Make Kababi Asil the most popular in the center
INSERT INTO food_order (id, customer_id, restaurant_id, order_time, delivery_time) VALUES
(1, 1, 2, datetime('now', '-2 hours'), datetime('now', '-1 hours', '-35 minutes')),
(2, 2, 2, datetime('now', '-3 hours'), datetime('now', '-2 hours', '-30 minutes')),
(3, 3, 4, datetime('now', '-4 hours'), datetime('now', '-3 hours', '-45 minutes')), -- Order for Cafe Naderi
(4, 1, 3, datetime('now', '-1 day'), datetime('now', '-1 day', '+25 minutes')),
(5, 2, 1, datetime('now', '-2 days'), datetime('now', '-2 days', '+40 minutes'));

-- Insert reviews
-- Two 5-star reviews for Kababi Asil
INSERT INTO review (order_id, rating, comment) VALUES
(1, 5, 'عالی بود!'),
(2, 5, 'بهترین کباب شهر'),
(3, 4, 'خوب بود ولی میتونست بهتر باشه'),
(4, 5, 'سیب زمینی سرخ کرده حرف نداشت');

