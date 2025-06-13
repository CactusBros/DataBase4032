# 🚀 Project 4: Flight Management System

This is a full-stack web application for flight data analytics. The backend provides a RESTful API built with Python and Flask, and the frontend is a React dashboard for visualizing flight operations data.

### About The Project

The application provides key operational insights for an airline:
- Which upcoming flights are completely full?
- Who are the frequent flyers (more than 3 flights in the last month)?
- What is the passenger occupancy rate for each flight destination?

### Technology Stack

| Component  | Technology                                     |
| :--------- | :--------------------------------------------- |
| **Backend** | Python, Flask, Flask-SQLAlchemy, SQLite        |
| **Frontend** | React.js, Vite, Tailwind CSS                   |
| **Tooling** | `make` for automation, `npm` for package management |

### ⚙️ Setup and Installation

1.  **Prerequisites:** Ensure you have Python 3, Node.js, and `make` installed.
2.  **Navigate to Project Directory:** Open your terminal in the `project4` folder.
3.  **Run Automated Setup:** This single command installs all dependencies for both frontend and backend.
    ```bash
    make setup
    ```
4.  **Initialize Database:** This command creates and populates the database with mock data.
    ```bash
    make reset-db
    ```

### ▶️ How to Run

From the `project4` directory, run the following command to start both servers concurrently:

```bash
make run
````

  - The backend API will be running at `http://127.0.0.1:5000`
  - The frontend application will be available at `http://localhost:5173` (or the next available port).

### 🌐 API Endpoints

| Method | Endpoint                      | Description                                                  |
| :----- | :---------------------------- | :----------------------------------------------------------- |
| `GET`  | `/flights/filled`             | Finds flights where the number of reservations equals capacity. |
| `GET`  | `/passengers/frequent-flyers` | Lists passengers with more than 3 flights in the last month. |
| `GET`  | `/flights/occupancy-rate`     | Calculates the reservation occupancy rate for each destination. |

### For Windows Users

The `makefile` is designed for Linux/macOS. For native Windows, it's highly recommended to use [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) and run the commands above. Alternatively, you can create and use `.bat` scripts.
