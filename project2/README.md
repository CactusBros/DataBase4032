# 🚀 Project 2: E-Commerce Store Analytics

This is a full-stack web application for analyzing e-commerce data. The backend provides a RESTful API built with Python and Flask, and the frontend is a React dashboard for visualizing the data.

### About The Project

The application provides key business insights by answering questions like:
- What is the best-selling product within a specific date range?
- What are the total monthly sales for each product category?
- Which products are running low on stock (less than 10 items)?
- Who are the top customers (more than 5 purchases in the last month)?

### Technology Stack

| Component  | Technology                                     |
| :--------- | :--------------------------------------------- |
| **Backend** | Python, Flask, Flask-SQLAlchemy, SQLite        |
| **Frontend** | React.js, Vite, Tailwind CSS                   |
| **Tooling** | `make` for automation, `npm` for package management |

### ⚙️ Setup and Installation

1.  **Prerequisites:** Ensure you have Python 3, Node.js, and `make` installed.
2.  **Navigate to Project Directory:** Open your terminal in the `project2` folder.
3.  **Run Automated Setup:** This single command installs all dependencies for both frontend and backend.
    ```bash
    make setup
    ```
4.  **Initialize Database:** This command creates and populates the database with mock data.
    ```bash
    make reset-db
    ```

### ▶️ How to Run

From the `project2` directory, run the following command to start both servers concurrently:

```bash
make run
````

  - The backend API will be running at `http://127.0.0.1:5000`
  - The frontend application will be available at `http://localhost:5173` (or the next available port).

## 📝 What To Do (Your Task)

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

    -- name: best_selling_product
        Goal: Find the single best-selling product within a given date range.
        Parameters: It will receive a :start_date and an :end_date.
        Output: It should return the product's name (product_name) and the total quantity sold (total_sold).

    -- name: monthly_sales_by_category
        Goal: Calculate the total sales revenue for each category, grouped by month.
        Parameters: None.
        Output: It should return the category name (category_name), the month (month in 'YYYY-MM' format), and the total sales for that month (total_sales).

    -- name: low_stock_alert
        Goal: Identify all products with a stock level of less than 10.
        Parameters: None.
        Output: It should return the product name and its current stock level.

    -- name: top_customers
        Goal: Find customers who have made more than 5 purchases in the last month.
        Parameters: None.
        Output: It should return the customer's name and the count of their purchases (purchase_count).

Hint: To write these queries, study the relationships between the customer, product, category, orders, and order_item tables in backend/schema.sql.

### 🌐 API Endpoints

| Method | Endpoint                          | Description                                      |
| :----- | :-------------------------------- | :----------------------------------------------- |
| `GET`  | `/products/best-selling`          | Finds the best-selling product in a date range.  |
| `GET`  | `/sales/monthly-by-category`      | Shows total monthly sales grouped by category.   |
| `GET`  | `/inventory/low-stock`            | Lists all products with stock levels below 10.   |
| `GET`  | `/customers/top`                  | Shows top customers with more than 5 purchases.  |

### For Windows Users

The `makefile` is designed for Linux/macOS. For native Windows, it's highly recommended to use [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) and run the commands above. Alternatively, you can create and use `.bat` scripts.
