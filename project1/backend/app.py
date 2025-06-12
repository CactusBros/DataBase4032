from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from util import load_queries
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(basedir, 'storage.db')}"

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////home/momoein/desk/projects/DataBase4032/project1/backend/storage.db'
db = SQLAlchemy(app)

class Student(db.Model):
    __tablename__ = 'student'
    
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, nullable=False, unique=True)
    name = db.Column(db.String, nullable=False)
    enrollments = db.relationship("Enrollment", backref="student", cascade="all, delete")

class Course(db.Model):
    __tablename__ = 'course'
    
    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, nullable=False, unique=True)
    title = db.Column(db.String, nullable=False)
    enrollments = db.relationship("Enrollment", backref="course")

class Enrollment(db.Model):
    __tablename__ = 'enrollment'
    
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey("course.id"), nullable=False)
    grade = db.Column(db.Float)
    term = db.Column(db.String)
    units = db.Column(db.Integer)

# --- Load Queries ---
queries = load_queries('queries.sql')

# --- Routes ---
@app.route('/')
def home():
    return "SQLite + Flask-SQLAlchemy setup is working!"


@app.route('/students/gpa')
def get_student_gpa():
    # print("query: ", queries['get_student_gpa'])
    result = db.session.execute(text(queries['get_student_gpa']))
    rows = [dict(row._mapping) for row in result]
    # print("Result rows:")
    # for row in rows:
    #     print(row)
    return jsonify(rows)


@app.route('/students/heavy-load/<term>')
def students_with_many_units(term):
    result = db.session.execute(
        text(queries['students_with_many_units']),
        {"term": term}
    )
    return jsonify([dict(row._mapping) for row in result])


@app.route('/courses/popular')
def popular_courses():
    result = db.session.execute(text(queries['popular_courses']))
    return jsonify([dict(row._mapping) for row in result])

@app.route('/student/delete/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    student = Student.query.filter_by(student_id=student_id).first_or_404()
    db.session.delete(student)
    db.session.commit()
    return jsonify({"message": f"Student with student_id {student_id} deleted."})

# Run app
if __name__ == '__main__':
    app.run(debug=True)