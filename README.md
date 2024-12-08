[Django & React Web App Tutorial - Authentication, Databases, Deployment & More...](https://www.youtube.com/watch?v=c-QsfbznSXI&ab_channel=TechWithTim)
[code](https://github.com/techwithtim/Django-React-Full-Stack-App)

React  - frontend
Django -backend
JWT tokens- authentication

register, login, create & display note, 
read, update,  delete data

# Backend
API, store data

# Frontend
user facing component to interact with API

1. create virtual enviroment to install various Python packages and activate it 
```
python -m venv env-full-stack
env-full-stack\Scripts\activate.bat
```
2. install dependencies from requirements.txt
```
pip install -r requirements.txt
```
3. create a new Django project
``` 
django-admin startproject backend
```
4. go to the Django directory and make a new django app
```
cd backend
python manage.py startapp api
```