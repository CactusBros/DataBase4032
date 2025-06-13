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

This project is fully functional but uses `makefile`s with placeholder comments for automation. Your main task is to **complete the `makefile` scripts** to fully automate the setup and execution workflow as described in this README.

1.  **Complete `project1/makefile`:**
    * Implement the `setup` target to create the Python virtual environment and install dependencies for both backend and frontend.
    * Implement `init-db`, `mock-data`, and `reset-db` to call the corresponding targets in the `backend/makefile`.
    * Implement `run`, `backend`, and `frontend` targets to launch the respective servers.

2.  **Explore and Extend (Optional):**
    * Add new API endpoints and queries to the backend.
    * Create new UI components in the frontend to consume the new endpoints.
    * Improve error handling and user feedback.

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