-- name: late_members
SELECT
    m.name,
    COUNT(l.id) as late_returns
FROM
    member m
JOIN
    loan l ON m.id = l.member_id
WHERE
    l.return_date > l.due_date
GROUP BY
    m.id
HAVING
    COUNT(l.id) > 3;

-- name: popular_books
SELECT
    b.title,
    b.author,
    COUNT(l.id) as times_borrowed
FROM
    book b
JOIN
    loan l ON b.id = l.book_id
GROUP BY
    b.id
HAVING
    COUNT(l.id) > 5;

-- name: avg_loan_time
SELECT
    b.title,
    AVG(JULIANDAY(l.return_date) - JULIANDAY(l.loan_date)) as avg_days
FROM
    book b
JOIN
    loan l ON b.id = l.book_id
WHERE
    l.return_date IS NOT NULL
GROUP BY
    b.id;

-- name: unpaid_fines
SELECT
    m.name,
    SUM(f.amount) as total_fine
FROM
    fine f
JOIN
    loan l ON f.loan_id = l.id
JOIN
    member m ON l.member_id = m.id
WHERE
    f.paid = 0
GROUP BY
    m.id;
