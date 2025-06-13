# Makefile for Project 5 Backend
.PHONY: install init-db mock-data run reset

DB_NAME=food_orders.db

install:
	@echo "📦 Installing dependencies from requirements.txt..."
	@pip install -r requirements.txt
	@echo "✅ Dependencies installed!"

init-db:
	@echo "🔄 Creating database schema for $(DB_NAME)..."
	@python3 app.py init-db
	@echo "✅ Database initialized!"

mock-data:
	@echo "📊 Populating database with mock data..."
	@sqlite3 $(DB_NAME) < mockdata.sql
	@echo "✅ Mock data generation complete!"

run:
	@echo "🚀 Starting the application..."
	@python3 app.py

reset:
	@echo "🔥 Resetting the database..."
	@rm -f $(DB_NAME)
	@$(MAKE) init-db
	@$(MAKE) mock-data
	@echo "🎉 Database has been reset and populated."
