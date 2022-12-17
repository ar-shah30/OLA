from mainApp.models import Client, Lawyer, Cases
from mainApp.serializers import ClientSerializer, LawyerSerializer, CaseSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from django.db.models import Q


class SignUpAsLaywer(APIView):
    
    def post(self, request, format=None):
        serializer = LawyerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SignUpAsClient(APIView):
    
    def post(self, request, format=None):
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAsLaywer(APIView):
    
    def post(self, request, format=None):
        email = request.data.get('lawyer_email')
        password = request.data.get('lawyer_password')
        success_message = {"greeting_message": f'Welcome {email}'}
        error_message = {"error_message": f'Either username or password is incorrect'}
        if email and password and Lawyer.objects.filter(Q(lawyer_email = email) & Q(lawyer_password = password)).exists():
            return Response(success_message,status=status.HTTP_200_OK)
        return Response(error_message, status=status.HTTP_401_UNAUTHORIZED)

class LoginAsClient(APIView):
    
    def post(self, request, format=None):
        email = request.data.get('client_email')
        password = request.data.get('client_password')
        success_message = {"greeting_message": f'Welcome {email}'}
        error_message = {"error_message": f'Either username or password is incorrect'}
        if email and password and Client.objects.filter(Q(client_email = email) & Q(client_password = password)).exists():
            return Response(success_message,status=status.HTTP_200_OK)
        return Response(error_message, status=status.HTTP_401_UNAUTHORIZED)

class ClientsList(APIView):
    """
    List all clients, or create a new client.
    """
    def get(self, request, format=None):
        clients = Client.objects.all()
        serializer = ClientSerializer(clients, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ClientDetail(APIView):
    """
    Retrieve, update or delete a client instance.
    """
    def get_object(self, pk):
        try:
            return Client.objects.get(pk=pk)
        except Client.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        client = self.get_object(pk)
        serializer = ClientSerializer(client)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        client = self.get_object(pk)
        serializer = ClientSerializer(client, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        client = self.get_object(pk)
        client.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




class LawyerList(APIView):
    """
    List all lawyers, or create a new lawyers.
    """
    def get(self, request, format=None):
        lawyers = Lawyer.objects.all()
        serializer = LawyerSerializer(lawyers, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = LawyerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LawyerDetail(APIView):
    """
    Retrieve, update or delete a client instance.
    """
    def get_object(self, pk):
        try:
            return Lawyer.objects.get(pk=pk)
        except Lawyer.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        lawyer = self.get_object(pk)
        serializer = LawyerSerializer(lawyer)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        lawyer = self.get_object(pk)
        serializer = LawyerSerializer(lawyer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        lawyer = self.get_object(pk)
        lawyer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CaseList(APIView):
    """
    List all cases, or create a new case.
    """
    def get(self, request, format=None):
        cases = Cases.objects.all()
        serializer = CaseSerializer(cases, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CaseDetail(APIView):
    """
    Retrieve, update or delete a client instance.
    """
    def get_object(self, pk):
        try:
            return Cases.objects.get(pk=pk)
        except Cases.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        case = self.get_object(pk)
        serializer = CaseSerializer(case)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        case = self.get_object(pk)
        serializer = CaseSerializer(case, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        case = self.get_object(pk)
        case.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)