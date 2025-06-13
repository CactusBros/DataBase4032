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

### 🌐 API Endpoints

| Method | Endpoint                | Description                                        |
| :----- | :---------------------- | :------------------------------------------------- |
| `GET`  | `/members/late`         | Finds members with more than 3 late returns.       |
| `GET`  | `/books/popular`        | Finds books that have been borrowed more than 5 times. |
| `GET`  | `/books/avg-loan-time`  | Calculates the average loan time in days for each book. |
| `GET`  | `/fines/unpaid`         | Lists members with outstanding unpaid fines.       |

### For Windows Users

The `makefile` is designed for Linux/macOS. For native Windows, it's highly recommended to use [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) and run the commands above. Alternatively, you can create and use `.bat` scripts.
