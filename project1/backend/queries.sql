-- GPA of each student
-- name: get_student_gpa
SELECT s.name, s.student_id, AVG(e.grade) AS gpa
FROM student s
JOIN enrollment e ON s.id = e.student_id
WHERE s.student_id = :student_id;

-- Students with more than 15 units in a term
-- name: students_with_many_units
SELECT s.name, s.student_id, SUM(e.units) AS total_units
FROM student s
JOIN enrollment e ON s.id = e.student_id
WHERE e.term = :term
GROUP BY s.id
HAVING SUM(e.units) > 15;

-- Courses with more than 50 students
-- name: popular_courses
SELECT c.title, c.course_id, COUNT(e.student_id) AS student_count
FROM course c
JOIN enrollment e ON c.id = e.course_id
GROUP BY c.id
HAVING COUNT(e.student_id) > 50;
