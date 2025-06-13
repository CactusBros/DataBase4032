migrate:
	@echo "🔄 Removing existing database..."
	@rm -f storage.db
	@echo "📦 Creating new empty database..."
	@touch storage.db
	@echo "📜 Running migrations from schema.sql..."
	@sqlite3 storage.db < schema.sql
	@echo "✅ Migration complete!"
mock_data:
	@echo "📊 Generating mock data..."
	@sqlite3 storage.db < mock_data.sql
	@echo "✅ Mock data generation complete!"
run:
	@echo "🚀 Starting the application..."
	@python3 app.py