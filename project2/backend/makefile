.PHONY: install init-db mock-data run reset

install:
	@pip3 install -r requirements.txt

init-db:
	@python3 app.py init-db

mock-data:
	@sqlite3 store.db < mockdata.sql

run:
	@python3 app.py

reset:
	@rm -f store.db
	@$(MAKE) init-db
	@$(MAKE) mock-data

