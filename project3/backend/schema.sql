-- Drop tables if they already exist to ensure a clean setup
DROP TABLE IF EXISTS fine;
DROP TABLE IF EXISTS loan;
DROP TABLE IF EXISTS member;
DROP TABLE IF EXISTS book;

-- Create the member table to store library members
CREATE TABLE member (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    member_id TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL
);

-- Create the book table to store book information
CREATE TABLE book (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_id TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    author TEXT
);

-- Create the loan table to track books borrowed by members
CREATE TABLE loan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    member_id INTEGER NOT NULL,
    book_id INTEGER NOT NULL,
    loan_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE,
    FOREIGN KEY (member_id) REFERENCES member (id),
    FOREIGN KEY (book_id) REFERENCES book (id)
);

-- Create the fine table to track fines for overdue loans
CREATE TABLE fine (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    loan_id INTEGER NOT NULL,
    amount REAL NOT NULL,
    paid INTEGER NOT NULL DEFAULT 0, -- 0 for false, 1 for true
    FOREIGN KEY (loan_id) REFERENCES loan (id)
);
