# Phony targets are not files. This prevents make from getting confused if a file with the same name exists.
.PHONY: setup init-db mock-data reset-db run backend frontend

# Default target that runs when you just type `make`.
all: setup reset-db run

# Target: setup
# Creates a Python virtual environment and installs all dependencies for both backend and frontend.
setup:
	@echo "🐍 Creating Python virtual environment in .venv..."
	python3 -m venv .venv
	@echo "🐍 Installing Python dependencies from backend/requirements.txt..."
	./.venv/bin/pip install -r backend/requirements.txt
	@echo "📦 Installing Node.js dependencies for the frontend..."
	npm --prefix frontend install
	@echo "✅ Setup complete! Environment is ready."

# Target: init-db
# Initializes the database by creating tables from the schema. It calls the `migrate` target in the backend.
init-db:
	@echo "🔄 Initializing database schema..."
	make -C backend migrate
	@echo "✅ Database initialized."

# Target: mock-data
# Populates the database with sample data by calling the `mock_data` target in the backend.
mock-data:
	@echo "📊 Populating database with mock data..."
	make -C backend mock_data
	@echo "✅ Mock data has been added."

# Target: reset-db
# A convenience target to completely reset the database to a clean state and repopulate it.
reset-db:
	@echo "♻️ Resetting database..."
	make -C backend migrate
	make -C backend mock_data
	@echo "✅ Database has been reset."

# Target: run
# Runs both the backend and frontend servers concurrently for development.
run:
	@echo "🚀 Starting both backend and frontend servers..."
	make backend & make frontend

# Target: backend
# Runs the backend Flask server using its own makefile.
backend:
	@echo "🔥 Starting backend server on http://127.0.0.1:5000"
	source .venv/bin/activate && make -C backend run

# Target: frontend
# Runs the frontend Vite development server.
frontend:
	@echo "🎨 Starting frontend server on http://localhost:5173"
	npm --prefix frontend run dev
