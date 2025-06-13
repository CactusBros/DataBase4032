# 🚀 Project 5: Food Order System Analytics

This is a full-stack web application for analyzing food order data. The backend provides a RESTful API built with Python and Flask, and the frontend is a React dashboard for visualizing the data.

### About The Project

The application provides key insights for a food delivery service. The exact features depend on the API implementation, but could include:
- Finding the most popular food items.
- Analyzing sales by time of day.
- Identifying top-spending customers.

### Technology Stack

| Component  | Technology                                     |
| :--------- | :--------------------------------------------- |
| **Backend** | Python, Flask, Flask-SQLAlchemy, SQLite        |
| **Frontend** | React.js, Vite, Tailwind CSS                   |
| **Tooling** | `make` for automation, `npm` for package management |

### ⚙️ Setup and Installation

1.  **Prerequisites:** Ensure you have Python 3, Node.js, and `make` installed.
2.  **Navigate to Project Directory:** Open your terminal in the `project5` folder.
3.  **Run Automated Setup:** This single command installs all dependencies for both frontend and backend.
    ```bash
    make setup
    ```
4.  **Initialize Database:** This command creates and populates the database with mock data.
    ```bash
    make reset-db
    ```

### ▶️ How to Run

From the `project5` directory, run the following command to start both servers concurrently:

```bash
make run
````

  - The backend API will be running at `http://127.0.0.1:5000`
  - The frontend application will be available at `http://localhost:5173` (or the next available port).

### 🌐 API Endpoints

**Note:** The backend code for this project was not available. The following are example endpoints based on a typical food order system.

| Method | Endpoint                    | Description                           |
| :----- | :-------------------------- | :------------------------------------ |
| `GET`  | `/items/most-popular`       | Finds the most frequently ordered food items. |
| `GET`  | `/customers/top-spenders`   | Lists the customers with the highest total order value. |
| `GET`  | `/sales/by-hour`            | Analyzes total sales for each hour of the day. |

### For Windows Users

The `makefile` is designed for Linux/macOS. For native Windows, it's highly recommended to use [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) and run the commands above. Alternatively, you can create and use `.bat` scripts.

