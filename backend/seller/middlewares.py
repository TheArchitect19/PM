from rest_framework.response import Response
from rest_framework import status
import jwt
import os

def check(request):
  data = request.data
  try:
    token = data['token']
    decoded = jwt.decode(token, os.environ.get("DJANGO_SECRET_KEY"), algorithms=['HS256'])
    if decoded['type'] == 'seller':
      return True
    else:
      return False
  except:
    return False


def isAuthenticated(view_func):
  def wrapper(request, *args, **kwargs):
    if check(request):
      return view_func(request, *args, **kwargs)
    else:
      return Response({'message': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
  return wrapper


def decodeToken(token):
  decoded = jwt.decode(token, os.environ.get("DJANGO_SECRET_KEY"), algorithms=['HS256'])
  return decoded
