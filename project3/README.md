# 🚀 Project 3: Library Management System

This is a full-stack web application for library analytics. The backend provides a RESTful API built with Python and Flask, and the frontend is a React dashboard for visualizing library activity.

### About The Project

The application provides key administrative insights by answering questions like:
- Which members have more than 3 late returns?
- What are the most popular books (borrowed more than 5 times)?
- What is the average loan duration for each book?
- Which members have unpaid fines, and what is the total amount?

### Technology Stack

| Component  | Technology                                     |
| :--------- | :--------------------------------------------- |
| **Backend** | Python, Flask, Flask-SQLAlchemy, SQLite        |
| **Frontend** | React.js, Vite, Tailwind CSS                   |
| **Tooling** | `make` for automation, `npm` for package management |

### ⚙️ Setup and Installation

1.  **Prerequisites:** Ensure you have Python 3, Node.js, and `make` installed.
2.  **Navigate to Project Directory:** Open your terminal in the `project3` folder.
3.  **Run Automated Setup:** This single command installs all dependencies for both frontend and backend.
    ```bash
    make setup
    ```
4.  **Initialize Database:** This command creates and populates the database with mock data.
    ```bash
    make reset-db
    ```

### ▶️ How to Run

From the `project3` directory, run the following command to start both servers concurrently:

```bash
make run
````

  - The backend API will be running at `http://127.0.0.1:5000`
  - The frontend application will be available at `http://localhost:5173` (or the next available port).

### 📝 What To Do (Your Task)

Your main task is to write the SQL queries that power the backend API. You will need to edit the backend/queries.sql file.

For each feature of the application, you must write the corresponding SQL query. It's crucial that you introduce each query with a special comment that names it, like so:
SQL

```sql
-- name: your_query_name
SELECT * FROM ...
```

This name is how the Python application finds and executes your code.
Required Queries

You need to implement the following queries inside backend/queries.sql:

    -- name: late_members
        Goal: Find all library members who have more than 3 late book returns on record.
        Parameters: None.
        Output: It should return the member's name and the total count of their late returns (late_returns).

    -- name: popular_books
        Goal: Identify books that have been borrowed more than 5 times.
        Parameters: None.
        Output: It should return the book's title, author, and the total number of times it has been borrowed (times_borrowed).

    -- name: avg_loan_time
        Goal: Calculate the average number of days each book is kept by a member before being returned.
        Parameters: None.
        Output: It should return the book's title and the average loan duration in days (avg_days).

    -- name: unpaid_fines
        Goal: Find the total amount of unpaid fines for each member.
        Parameters: None.
        Output: It should return the member's name and their total outstanding fine amount (total_fine).

Hint: To write these queries, study the relationships between the member, book, loan, and fine tables in backend/schema.sql.

### 🌐 API Endpoints

| Method | Endpoint                | Description                                        |
| :----- | :---------------------- | :------------------------------------------------- |
| `GET`  | `/members/late`         | Finds members with more than 3 late returns.       |
| `GET`  | `/books/popular`        | Finds books that have been borrowed more than 5 times. |
| `GET`  | `/books/avg-loan-time`  | Calculates the average loan time in days for each book. |
| `GET`  | `/fines/unpaid`         | Lists members with outstanding unpaid fines.       |

### For Windows Users

The `makefile` is designed for Linux/macOS. For native Windows, it's highly recommended to use [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) and run the commands above. Alternatively, you can create and use `.bat` scripts.
