backend directory
    - api: for applications, e.g. authentication
    - backend: some files related to setting

JWT (Json Web Token)
pass some crendentials to frontend
frontend will sent the token to backend

access token: request
refresh token: to refresh the access token

1. after set Django properly (settings.py)
2. make the registration view
    3.  serializers.py 
    4. view.py to add views
    5. urls.py: configure all different urls
    6. make migration on database
    `python manage.py makemigrations`
    7. apply the migrations
    `python manage.py migrate`
    8. run the application
    `python manage.py runserver`
    9. open the url and check the function http://127.0.0.1:8000/
        go to different routes by changing the url, e.g. http://127.0.0.1:8000/api/user.register
        ![create a user](./assets_backend/create_user.gif)