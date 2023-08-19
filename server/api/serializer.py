from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer as JwtTokenObtainPairSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('email', 'password')

# class TokenObtainPairSerializer(JwtTokenObtainPairSerializer):
#     username_field = get_user_model().USERNAME_FIELD

class TokenObtainPairSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    access = serializers.CharField()