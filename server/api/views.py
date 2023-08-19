from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from .serializer import UserSerializer, TokenObtainPairSerializer
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.
# def index(request):
#     return HttpResponse("")
from django.contrib.auth  import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework.authtoken.models import Token

from django.contrib.auth import get_user_model

class SignUpView(APIView):
    # def get(self, request, *args, **kwargs):
    #     print(request)
    #     return Response({
    #         "status": "success",
    #     })
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        print("122323123", request.data)
        if serializer.is_valid():
            print('sefefefsfe', serializer.validated_data)
            # get_user_model().objects.create_user(**serializer.validated_data)
            # get_user_model().objects.create_user("harry", "harry@gmail.com", "12345")
            print("intert 123123",request.data['firstname'],request.data['email'],request.data['password'])
            get_user_model().objects.create_user(request.data['firstname'],request.data['email'],request.data['password'])
            username = get_user_model().objects.get(email=request.data['email'])
            print('33333', username)
            user = authenticate(username=username, password=request.data['password'])
            token, create = Token.objects.get_or_create(user = username)
            print("sdfeeseeeeeeeee", token.key)
            return Response({'status':'Success', 'token':token.key}, status=HTTP_200_OK)
        return Response({'Status':'Bad', token:None},status=HTTP_400_BAD_REQUEST)
# class SignInView(TokenObtainPairView):
#     serializer_class = TokenObtainPairSerializer
class SignInView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        print('111111', email, password)
        username = get_user_model().objects.get(email=email)
        print('33333', username)
        user = authenticate(username=username, password=password)
        print('2222222', user)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            print("444444", token.key)
            return Response({'status': 'Success', 'token': token.key}, status=HTTP_200_OK)
        else:
            return Response({'status': 'Bad', 'token':None}, status=HTTP_400_BAD_REQUEST)
