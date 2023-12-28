from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Shop, Product
from auths.models import Seller
from .middlewares import isAuthenticated, decodeToken
import jwt
import os

def ISR(exception):
  return Response({'ok': False, 'message': 'An error occurred', 'error': str(exception)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def ErrorResponse(message, exception):
  return Response({'ok': False, 'message': message, 'error': str(exception)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@isAuthenticated
def reg_shop(request):
  data = request.data
  try:
    decodedToken = decodeToken(data['token'])
    ownerEmail = decodedToken['email']
    owner = Seller.objects.get(email=ownerEmail)
    Shop.objects.create(owner=owner, name=data['name'], description=data['description'], address=data['address'], shop_image=data['shop_image'], banner=data['banner'], instagram_handle=data['instagram_handle'], yt_handle=data['yt_handle'], GST=data['GST'], bank_account=data['bank_account'])
    return Response({'ok': True, 'message': 'Shop created'}, status=status.HTTP_201_CREATED)
  
  except Seller.DoesNotExist as e:
    return ErrorResponse("Seller doesn't exist", e)
  except Exception as e:
    return ISR(e)


@api_view(['POST'])
@isAuthenticated
def get_shops(request):
  data = request.data
  try:
    decodedToken = decodeToken(data['token'])
    ownerEmail = decodedToken['email']
    shops = Shop.objects.filter(owner=Seller.objects.get(email=ownerEmail)).values()
    return Response({'ok': True, 'shops': shops}, status=status.HTTP_200_OK)
  
  except Seller.DoesNotExist as e:
    return ErrorResponse("Seller doesn't exist", e)
  except Exception as e:
    return ISR(e)


@api_view(['POST'])
@isAuthenticated
def upload_product(request):
  data = request.data
  try:
    decodedToken = decodeToken(data['token'])
    ownerEmail = decodedToken['email']
    shopOwner = Seller.objects.get(email=ownerEmail)
    shop = Shop.objects.get(owner=shopOwner, name=data['shopName'])

    del data['token']
    del data['shopName']
    data['shop'] = shop
    Product.objects.create(
      shop=shop,
      name=data['name'],
      description=data['description'],
      price=data['price'],
      category=data['category'],
      brand=data['brand'],
      stock=data['stock'],
      size=data['size'],
      image1=data['image1'],
      image2=data.get('image2', None),
      image3=data.get('image3', None),
      image4=data.get('image4', None),
      image5=data.get('image5', None),
      video=data['video'],
      hashtags=data['hashtags']
    )
    return Response({'ok': True, 'message': 'Product uploaded'}, status=status.HTTP_201_CREATED)

  except Seller.DoesNotExist as e:
    return ErrorResponse("Seller doesn't exist", e)
  except Shop.DoesNotExist as e:
    return ErrorResponse("Shop doesn't exist", e)
  except Exception as e:
    return ISR(e)
