[Django & React Web App Tutorial - Authentication, Databases, Deployment & More...](https://www.youtube.com/watch?v=c-QsfbznSXI&ab_channel=TechWithTim)
[code](https://github.com/techwithtim/Django-React-Full-Stack-App)
[Video to gif](https://www.veed.io/edit/7a908f6f-583c-498c-8f47-28ad48017034/media)

React  - frontend
Django -backend
JWT tokens- authentication

register, login, create & display note, 
read, update,  delete data

Django uses an ORM (object-relational mapping), which map the code Objects to the database. 

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
5. Django setting
import necessary libraries in backend-settings.py