from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Shop
from .middlewares import isAuthenticated

def ISR(exception):
  return Response({'ok': False, 'message': 'ISR', 'error': str(exception)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def ErrorResponse(message, exception):
  return Response({'ok': False, 'message': message, 'error': str(exception)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@isAuthenticated
def reg_shop(request):
  data = dict(request.data)
  try:
    del data['token']
    del data['type']
    Shop.objects.create(**data)
    return Response({'ok': True, 'message': 'Shop created'}, status=status.HTTP_201_CREATED)
  except Exception as e:
    return ISR(e)
