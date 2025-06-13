-- Clear existing data to prevent duplicates
DELETE FROM fine;
DELETE FROM loan;
DELETE FROM member;
DELETE FROM book;

-- Insert sample members
INSERT INTO member (id, member_id, name) VALUES
(1, 'M-101', 'علی اکبری'),
(2, 'M-102', 'فاطمه محمدی'),
(3, 'M-103', 'رضا قاسمی'),
(4, 'M-104', 'سارا حسینی'),
(5, 'M-105', 'کیانوش حقیقی');

-- Insert sample books
INSERT INTO book (id, book_id, title, author) VALUES
(1, 'B-001', 'شازده کوچولو', 'آنتوان دو سنت-اگزوپری'),
(2, 'B-002', 'بوف کور', 'صادق هدایت'),
(3, 'B-003', 'کلیدر', 'محمود دولت‌آبادی'),
(4, 'B-004', 'تاریخ بیهقی', 'ابوالفضل بیهقی'),
(5, 'B-005', 'سمفونی مردگان', 'عباس معروفی'),
(6, 'B-006', 'چشمهایش', 'بزرگ علوی'),
(7, 'B-007', 'مدیریت پروژه', 'هارولد کرزنر');

-- Insert sample loans
-- علی اکبری has 4 late returns to test the 'late_members' query
-- شازده کوچولو is borrowed 6 times and کلیدر 7 times to test the 'popular_books' query
-- Some loans are returned, some are not
INSERT INTO loan (id, member_id, book_id, loan_date, due_date, return_date) VALUES
-- علی اکبری (member_id: 1)
(1, 1, 1, '2025-01-10', '2025-01-24', '2025-01-28'), -- Late
(2, 1, 2, '2025-02-05', '2025-02-19', '2025-02-25'), -- Late
(3, 1, 3, '2025-03-01', '2025-03-15', '2025-03-20'), -- Late
(4, 1, 4, '2025-04-10', '2025-04-24', '2025-05-01'), -- Late
-- فاطمه محمدی (member_id: 2)
(5, 2, 5, '2025-02-15', '2025-03-01', '2025-03-01'), -- On time
(6, 2, 6, '2025-03-20', '2025-04-03', '2025-04-10'), -- Late
-- رضا قاسمی (member_id: 3)
(7, 3, 7, '2025-05-01', '2025-05-15', NULL),          -- Not returned yet
-- Other loans to make books popular
(8, 4, 1, '2025-02-11', '2025-02-25', '2025-02-24'), -- On time
(9, 5, 1, '2025-03-12', '2025-03-26', '2025-03-25'), -- On time
(10, 2, 1, '2025-04-15', '2025-04-29', NULL),         -- Not returned yet
(11, 3, 1, '2025-05-20', '2025-06-03', NULL),         -- Not returned yet
(12, 4, 1, '2025-06-01', '2025-06-15', NULL),         -- Not returned yet
(13, 5, 3, '2024-12-01', '2024-12-15', '2024-12-14'), -- On time
(14, 2, 3, '2025-01-02', '2025-01-16', '2025-01-15'), -- On time
(15, 4, 3, '2025-02-03', '2025-02-17', '2025-02-16'), -- On time
(16, 1, 3, '2025-03-04', '2025-03-18', NULL),         -- Not returned yet
(17, 5, 3, '2025-04-05', '2025-04-19', NULL),         -- Not returned yet
(18, 3, 3, '2025-05-06', '2025-05-20', NULL);         -- Not returned yet


-- Insert sample fines for late returns
-- Fines for علی اکبری (loans 1, 2, 3, 4)
INSERT INTO fine (loan_id, amount, paid) VALUES
(1, 4000.0, 1),    -- Paid
(2, 6000.0, 0),    -- Unpaid
(3, 5000.0, 0),    -- Unpaid
(4, 7000.0, 0);    -- Unpaid
-- Fine for فاطمه محمدی (loan 6)
INSERT INTO fine (loan_id, amount, paid) VALUES
(6, 7000.0, 1);    -- Paid

