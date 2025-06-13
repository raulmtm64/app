from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password
from .models import Users
# from .serializers import UserSerializer  # veremos luego cómo hacer este serializer

class Login(APIView):
    def post(self, request):
        data = request.data
        user_identifier = list(data.keys())[0]
        user = data.get(user_identifier)
        password = request.data.get('password')

        if not user or not password:
            return Response({"error":"Faltan datos"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = Users.objects.get(user_identifier=user)
        except Users.DoesNotExist:
            return Response({"error": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        # if not check_password(password, user.password)    -->  PULIR
        if user.password != password:
            return
        
            