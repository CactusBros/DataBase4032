# Main Makefile for Project 4: Flight Management
.PHONY: setup init-db mock-data reset-db run backend frontend all

# Default target that runs when you just type `make`.
all: setup reset-db run

# Target: setup
# Creates a Python virtual environment and installs all dependencies.
setup:
	@echo "🐍 Creating Python virtual environment in .venv..."
	python3 -m venv .venv
	@echo "🐍 Installing Python dependencies..."
	./.venv/bin/pip install -r backend/requirements.txt
	@echo "📦 Installing Node.js dependencies for the frontend..."
	npm --prefix frontend install
	@echo "✅ Setup complete!"

# Target: init-db
# Initializes the database by calling the backend's `init-db` target.
init-db:
	@echo "🔄 Initializing database schema..."
	make -C backend init-db
	@echo "✅ Database initialized."

# Target: mock-data
# Populates the database by calling the backend's `mock-data` target.
mock-data:
	@echo "📊 Populating database with mock data..."
	make -C backend mock-data
	@echo "✅ Mock data has been added."

# Target: reset-db
# Resets the database by calling the backend's `reset` target.
reset-db:
	@echo "♻️ Resetting database..."
	make -C backend reset
	@echo "✅ Database has been reset."

# Target: run
# Runs both the backend and frontend servers concurrently.
run:
	@echo "🚀 Starting both backend and frontend servers..."
	make backend & make frontend

# Target: backend
# Runs the backend Flask server using the virtual environment's python.
backend:
	@echo "🔥 Starting backend server on http://127.0.0.1:5000"
	source .venv/bin/activate && make -C backend run

# Target: frontend
# Runs the frontend Vite development server.
frontend:
	@echo "🎨 Starting frontend server on http://localhost:5173"
	npm --prefix frontend run dev
