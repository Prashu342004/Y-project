# Young Boys FC – Backend API (for frontend integration)

## Setup
```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
API base URL: **http://localhost:8000**

## Endpoints

### GET /
**Response**
- `players_detail`: array of `{ photo, name, position, jersey_no }`
- `upcoming_matches`: `{ club_name, time_date, location }`

### GET /profile
**Response**
- `players_detail`: `{ photo, name, position, jersey_no }`
- `attendence_data`: `{ percentage, date_of_present, date_of_absent, fee_status }`
- `contact_info`: `{ mobile_no, email }`

## Add data
Create superuser: `python manage.py createsuperuser`  
Then open **http://localhost:8000/admin/** and add Players, Matches, Attendance.

## Frontend
CORS is enabled for all origins. Call the above URLs from your app (e.g. `fetch('http://localhost:8000/')`).
