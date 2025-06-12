CREATE TABLE IF NOT EXISTS student (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER NOT NULL UNIQUE,
    name TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_student_student_id ON student(student_id);


CREATE TABLE IF NOT EXISTS course (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_id INTEGER NOT NULL UNIQUE,
    title TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_course_course_id ON course(course_id);


CREATE TABLE IF NOT EXISTS enrollment (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    grade REAL,
    term TEXT,
    units INTEGER,
    FOREIGN KEY (student_id) REFERENCES student(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_enrollment_student_id ON enrollment(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollment_course_id ON enrollment(course_id);
CREATE INDEX IF NOT EXISTS idx_enrollment_term ON enrollment(term);
