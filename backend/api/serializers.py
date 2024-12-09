from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        # except for password, write_only is set to True, noone should be able to see the password
        extra_kwargs = {'password':{'write_only':True}}

    # function to create a user
    # check teh validated_data ('username', 'password') and create a user
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    

