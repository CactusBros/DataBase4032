DROP TABLE IF EXISTS review;
DROP TABLE IF EXISTS food_order;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS restaurant;

CREATE TABLE restaurant (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    region TEXT NOT NULL
);

CREATE TABLE customer (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL
);

CREATE TABLE food_order (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER NOT NULL,
    restaurant_id INTEGER NOT NULL,
    order_time DATETIME NOT NULL,
    delivery_time DATETIME,
    FOREIGN KEY (customer_id) REFERENCES customer (id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurant (id)
);

CREATE TABLE review (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    comment TEXT,
    FOREIGN KEY (order_id) REFERENCES food_order (id)
);
