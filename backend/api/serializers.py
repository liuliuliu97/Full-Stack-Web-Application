from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        # except for password, write_only is set to True, noone should be able to see the password
        extra_kwargs = {'password':{'write_only':True}}

    # function to create a user
    # check teh validated_data ('username', 'password') and create a user
    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user
    

# convert api model into json data
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content', 'created_at', 'author']
        # readers can only read the author, not write
        extra_kwargs = {'author':{'read_only':True}}
        # # author is a foreign key, so we need to specify the depth
        # # depth = 1 means that we want to include the author object in the response
        # # depth = 2 means that we want to include the author object and all its fields in the response
        # depth = 1