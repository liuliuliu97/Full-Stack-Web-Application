from django.shortcuts import render
# view to create a user / registeration
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note

# Create your views here.
class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    # queryset: list of all users
    queryset = User.objects.all()

# view to list all notes and create a new note
class NoteListCreate(generics.ListCreateAPIView):
    # only authenticated users can access this view
    permission_classes = [IsAuthenticated]
    serializer_class = NoteSerializer

    # function to get notes
    def get_queryset(self):
        user = self.request.user
        # return all the notes of the user
        return Note.objects.filter(author=user) 
        # return all the notes
        # return Note.notes.all()

    # override the perform_create function
    # function to create a note
    def perform_create(self, serializer):
        if serializer.is_valid():
            # save the author as the current user
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)
    
    # view to retrieve, update and delete a note
class NoteDelete(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = NoteSerializer

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)