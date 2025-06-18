from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password
from .models import Users
# from .serializers import UserSerializer  # veremos luego cómo hacer este serializer

class Login(APIView):
    def post(self, request):
        data = request.data

        user_identifier = None
        for key in ['nick', 'email']:
            if key in data:
                user_identifier = key
                break

        user = data.get(user_identifier)
        password = request.data.get('password')
        filter_kwargs = {user_identifier: user}

        if not user or not password:
            return Response({"error":"Missing data"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = Users.objects.get(**filter_kwargs)
        except Users.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        # if not check_password(password, user.password)    -->  PULIR
        if user.password != password:
            return Response({"error": "Wrong password"}, status=status.HTTP_401_UNAUTHORIZED)
        
        return Response({"msgLogin":"OK"})

        
            