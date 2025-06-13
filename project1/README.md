# 🚀 Full-Stack Student Management System

This project is a full-stack web application for managing student data. It features a Python/Flask backend that serves a RESTful API and a React/Vite frontend that provides a user-friendly interface.

The application is designed as a dashboard for querying a university database, with a user interface in Farsi.

## 📖 About The Project

The application allows a user to perform several actions against a student database:

* **View Student GPA:** Look up the Grade Point Average for a specific student by their ID.
* **Find Students with Heavy Workload:** Get a list of students who have taken more than 15 units in a given term.
* **Identify Popular Courses:** Find courses with more than 50 enrolled students.
* **Delete a Student:** Remove a student and all their associated enrollment records from the database.

### Technology Stack

| Component | Technology                                                              |
| :-------- | :---------------------------------------------------------------------- |
| **Backend** | Python, Flask, Flask-SQLAlchemy, SQLite                                 |
| **Frontend**| React.js, Vite, Tailwind CSS                                            |
| **Tooling** | `make` for task automation, `npm` for frontend package management |

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following software installed on your system:

* **Python 3.10+** and `pip`
* **Node.js 18+** and `npm`
* **`make`** (usually pre-installed on Linux and macOS; available on Windows via WSL or Chocolatey)
* **`sqlite3`** command-line tool (for manual database operations)

### Installation & Setup

These steps will set up your development environment, including Python virtual environment, Node.js dependencies, and the database.

1.  **Clone the Repository**
    ```bash
    # Clone the repo if you haven't already
    git clone https://github.com/CactusBros/DataBase4032.git
    
    # Navigate to the project directory
    cd DataBase4032/project1
    ```

2.  **Run the Automated Setup**
    The project includes a `makefile` to automate the setup process. Run the following command from the `project1` directory:
    ```bash
    make setup
    ```
    This command will:
    * Create and activate a Python virtual environment (`.venv`).
    * Install all required Python packages from `backend/requirements.txt`.
    * Install all required JavaScript packages from `frontend/package.json`.

3.  **Initialize the Database**
    The backend has its own `makefile` for database management.
    ```bash
    # Navigate to the backend directory
    cd backend

    # Create the database tables from schema.sql
    make migrate

    # (Optional) Populate the database with sample data
    make mock_data
    ```

## ▶️ How to Run the Application

You can run the backend and frontend servers together with a single command or run them separately.

### Combined (Recommended)

From the root `project1` directory, run:

```bash
make run
```
This will start both the Flask backend server and the Vite frontend development server concurrently.

### Separate

If you prefer to run the servers in separate terminal windows:

1.  **Run the Backend Server:**
    ```bash
    cd backend
    make run 
    # The Flask API will be available at http://127.0.0.1:5000
    ```

2.  **Run the Frontend Server:**
    ```bash
    cd frontend
    npm run dev
    # The React application will be available at http://localhost:5173 (or another port if 5173 is busy)
    ```

Once running, open your web browser and navigate to the frontend URL to use the application.

## 📝 What To Do (Your Task)

Your main task is to write the SQL queries that power the backend API. You will need to edit the backend/queries.sql file, which is currently empty.

For each feature of the application, you must write the corresponding SQL query. It's crucial that you introduce each query with a special comment that names it, like so:
SQL

```sql
-- name: your_query_name
SELECT * FROM ...
```

This name is how the Python application finds and executes your code.
Required Queries

You need to implement the following queries inside backend/queries.sql:

    -- name: get_student_gpa
        Goal: This query should calculate the GPA for a single student.
        It will receive a :student_id as a parameter.
        It should return the student's name, ID, and their average grade (gpa).

    -- name: students_with_many_units
        Goal: This query should find all students who have taken more than 15 units in a specific term.
        It will receive a :term as a parameter.
        It should return the student's name, ID, and the total units they have taken in that term.

    -- name: popular_courses
        Goal: This query should find all courses that have more than 50 enrolled students.
        It takes no parameters.
        It should return the course title, course ID, and the total number of students enrolled.

Hint: To write these queries successfully, first study the database structure defined in backend/schema.sql. Understanding the relationships between the student, course, and enrollment tables is the key to solving the task.

## 🏛️ Project Structure

```
project1/
├── makefile           # Main makefile for setup and running the project
├── backend/
│   ├── app.py         # Flask application, defines API endpoints
│   ├── makefile       # Makefile for backend-specific tasks (DB migration)
│   ├── schema.sql     # SQL script to define the database schema
│   ├── mock_data.sql  # SQL script to insert sample data
│   ├── queries.sql    # Contains the SQL queries used by the app
│   ├── requirements.txt # Python dependencies
│   └── storage.db     # The SQLite database file
└── frontend/
    ├── package.json   # Node.js dependencies and scripts
    ├── vite.config.js # Vite build configuration
    ├── index.html     # Main HTML entry point
    └── src/
        ├── App.jsx        # Main React application component
        ├── global.css   # Global styles and font definitions
        └── components/  # Reusable React components
```

## 🌐 Backend API Endpoints

The Flask backend exposes the following endpoints:

| Method   | Endpoint                          | Description                                                                                                   |
| :------- | :-------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| `GET`    | `/`                               | Home route to check if the server is running.                                                                 |
| `GET`    | `/students/gpa?student_id=<id>`   | Retrieves the name, ID, and GPA for a given student.                                                          |
| `GET`    | `/students/heavy-load/<term>`     | Finds students who have taken more than 15 units in a specified term.                                         |
| `GET`    | `/courses/popular`                | Returns a list of courses with more than 50 students enrolled.                                                |
| `DELETE` | `/student/delete/<student_id>`    | Deletes a student and their corresponding enrollments from the database.                                      |