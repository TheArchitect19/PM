from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Buyers
import jwt
import os
from django.db import IntegrityError

@api_view(['POST'])
def signup(request):
  data = dict(request.data)
  data_fields = list(data.keys())
  model = None

  if 'type' not in data_fields or len(data['type']) == 0:
    return Response({'ok': False, 'message': 'All fields must be present and non-empty'}, status=status.HTTP_400_BAD_REQUEST)
  
  if data['type'] == 'buyer':
    model = Buyers
  
  fields = ['email', 'phone']
  for i in fields:
    if i not in data_fields or len(data[i]) == 0:
      return Response({'ok': False, 'message': 'All fields must be present and non-empty'}, status=status.HTTP_400_BAD_REQUEST)
  
  try:
    email_exists = Buyers.objects.filter(email=data['email'])
    if len(email_exists) != 0:
      return Response({'ok': False, 'message': 'Logged in'}, status=status.HTTP_400_BAD_REQUEST)
  except Exception as e:
    return Response({'ok': False, 'message': 'ISR', 'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
  
  try:
    del data['type']
    Buyers.objects.create(**data)
    user_token = jwt.encode({"email": data["email"], "type": "buyer"}, os.environ.get("DJANGO_SECRET_KEY"), algorithm="HS256")
    return Response({'ok': True, 'message': 'Account created', 'token': user_token}, status=status.HTTP_201_CREATED)
  except IntegrityError as e:
    return Response({'ok': False, 'message': 'Email or phone already exists', 'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
  except Exception as e:
    return Response({'ok': False, 'message': 'ISR', 'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def login(request):
  data = request.data
  data_fields = list(data.keys())
  model = None

  if 'type' not in data_fields or data['type'] == '':
    return Response({'ok': False, 'message': 'All fields must be present and non-empty'}, status=status.HTTP_400_BAD_REQUEST)
  
  if data['type'] == 'buyer':
    model = Buyers

  try:
    Buyers.objects.get(email=data['email'])
    
    user_token = jwt.encode({"email": data["email"], "type": "buyer"}, os.environ.get("DJANGO_SECRET_KEY"), algorithm="HS256")
    return Response({'ok': True, 'message': 'Logged in', 'token': user_token}, status=status.HTTP_200_OK)
  except Buyers.DoesNotExist as e:
    return Response({'ok': False, 'message': "Buyer doesn't exist"}, status=status.HTTP_400_BAD_REQUEST)
  except Exception as e:
    return Response({'ok': False, 'message': 'ISR', 'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def check(request):
  data = dict(request.data)
  try:
    decoded = jwt.decode(data['token'], os.environ.get("DJANGO_SECRET_KEY"), algorithms=['HS256'])
    return Response({'ok': True}, status=status.HTTP_200_OK)
  except:
    return Response({'ok': False}, status=status.HTTP_401_UNAUTHORIZED)