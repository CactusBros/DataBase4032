.PHONY: install init-db mock-data run reset

install:
	@echo "📦 Installing dependencies from requirements.txt..."
	@pip install -r requirements.txt
	@echo "✅ Dependencies installed!"

init-db:
	@echo "🔄 Creating database schema for food_orders.db..."
	@python3 app.py init-db
	@echo "✅ Database initialized!"

mock-data:
	@echo "📊 Populating database with mock data..."
	@sqlite3 food_orders.db < mockdata.sql
	@echo "✅ Mock data generation complete!"

run:
	@echo "🚀 Starting the application..."
	@python3 app.py

reset:
	@echo "🔥 Resetting the database..."
	@rm -f food_orders.db
	@$(MAKE) init-db
	@$(MAKE) mock-data
	@echo "🎉 Database has been reset and populated."

