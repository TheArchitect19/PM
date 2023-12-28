server:
	cd backend && .\.venv\Scripts\activate && python manage.py runserver

seller:
	cd pm-seller && npm start

store:
	cd pm-store && npm start