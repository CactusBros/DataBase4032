-- Insert students
INSERT INTO student (student_id, name) VALUES (1001, 'Alice');
INSERT INTO student (student_id, name) VALUES (1002, 'Bob');
INSERT INTO student (student_id, name) VALUES (1003, 'Charlie');

-- Insert courses
INSERT INTO course (course_id, title) VALUES (2001, 'Math 101');
INSERT INTO course (course_id, title) VALUES (2002, 'Physics 201');
INSERT INTO course (course_id, title) VALUES (2003, 'History 301');
INSERT INTO course (course_id, title) VALUES (2004, 'Chemistry 401');

-- Insert enrollments
-- Use internal ID (1, 2, 3) that auto-incremented, assuming known order
-- Alice (id=1)
INSERT INTO enrollment (student_id, course_id, grade, term, units) VALUES (1, 1, 17, '4032', 4);
INSERT INTO enrollment (student_id, course_id, grade, term, units) VALUES (1, 2, 15, '4032', 4);
INSERT INTO enrollment (student_id, course_id, grade, term, units) VALUES (1, 3, 13, '4032', 4);
INSERT INTO enrollment (student_id, course_id, grade, term, units) VALUES (1, 4, 19, '4032', 4);

-- Bob (id=2)
INSERT INTO enrollment (student_id, course_id, grade, term, units) VALUES (2, 1, 15, '4032', 4);
INSERT INTO enrollment (student_id, course_id, grade, term, units) VALUES (2, 3, 14, '4032', 4);

-- Charlie (id=3)
INSERT INTO enrollment (student_id, course_id, grade, term, units) VALUES (3, 2, 16, '4032', 4);
INSERT INTO enrollment (student_id, course_id, grade, term, units) VALUES (3, 1, 18, '4032', 4);
