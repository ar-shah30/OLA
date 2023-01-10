from mainApp.models import Client, Lawyer, Cases
from mainApp.serializers import ClientSerializer, LawyerSerializer, CaseSerializer, CasesDetailSerializer, CaseSerializerForLawyer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from django.db.models import Q
from datetime import  datetime
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse


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

@csrf_exempt
def place_case(request):
        if request.method == 'POST':
            data = JSONParser().parse(request)
            lawyer = data.get("lawyer")
            client = data.get("client")
            lawyer_id = Lawyer.objects.get(lawyer_cnic = lawyer)
            client_id = Client.objects.get(client_email = client)
            case_details = data.get("case_details")
            case = Cases(
                lawyer_id=lawyer_id,
                client_id=client_id,
                case_creation_date=datetime.now(),
                case_details=case_details
            )
            case.save()
            return JsonResponse(data= {"success": "Case Created"}, status=201)

class CaseDetailForLawyer(APIView):

    def get(self, request, cnic, format=None):
        case = Cases.objects.filter(lawyer_id__lawyer_cnic = cnic)
        if case:
            serializer = CaseSerializerForLawyer(case, many=True)
            return Response(serializer.data)
        return Response(status=status.HTTP_204_NO_CONTENT)
      
def accept_case(self, case_reference_no):
    case = Cases.objects.get(case_reference_no=case_reference_no)
    case.case_status = 'AC'
    case.save()
    return case

def reject_case(self, case_reference_no):
    case = Cases.objects.get(case_reference_no=case_reference_no)
    case.case_status = 'RE'
    case.save()
    return case

def close_case(self, case_reference_no):
    case = Cases.objects.get(case_reference_no=case_reference_no)
    case.case_status = 'CL'
    case.save()
    return case

def get_open_cases(self):
    return Cases.objects.filter(client_id=self, case_status='OP')

def get_accepted_cases(self):
    return Cases.objects.filter(client_id=self, case_status='AC')

def get_closed_cases(self):
    return Cases.objects.filter(client_id=self, case_status='CL')

def get_rejected_cases(self):
    return Cases.objects.filter(client_id=self, case_status='RE')

def get_freshman_cases(self):
    return Cases.objects.filter(client_id=self, case_type='FR')

def get_sophomore_cases(self):
    return Cases.objects.filter(client_id=self, case_type='SO')

def get_junior_cases(self):
    return Cases.objects.filter(client_id=self, case_type='JR')

def get_senior_cases(self):
    return Cases.objects.filter(client_id=self, case_type='SR')

def get_graduate_cases(self):
    return Cases.objects.filter(client_id=self, case_type='GR')

def get_case_details(self, case_reference_no):
    return Cases.objects.get(case_reference_no=case_reference_no)

def get_lawyer_details(self, case_reference_no):
    case = Cases.objects.get(case_reference_no=case_reference_no)
    return Lawyer.objects.get(lawyer_cnic=case.lawyer_id)

def get_lawyer_name(self, case_reference_no):
    case = Cases.objects.get(case_reference_no=case_reference_no)
    return Lawyer.objects.get(lawyer_cnic=case.lawyer_id).lawyer_name

def get_lawyer_email(self, case_reference_no):
    case = Cases.objects.get(case_reference_no=case_reference_no)
    return Lawyer.objects.get(lawyer_cnic=case.lawyer_id).lawyer_email

def get_lawyer_phone(self, case_reference_no):
    case = Cases.objects.get(case_reference_no=case_reference_no)
    return Lawyer.objects.get(lawyer_cnic=case.lawyer_id).lawyer_phone

def get_lawyer_qualification(self, case_reference_no):
    case = Cases.objects.get(case_reference_no=case_reference_no)
    return Lawyer.objects.get(lawyer_cnic=case.lawyer_id).lawyer_qualification

def get_lawyer_specialization(self, case_reference_no):
    case = Cases.objects.get(case_reference_no=case_reference_no)
    return Lawyer.objects.get(lawyer_cnic=case.lawyer_id).lawyer_specialization

def get_case_status(self, case_reference_no):
    case = Cases.objects.get(case_reference_no=case_reference_no)
    return case.case_status

def get_case_type(self, case_reference_no):
    case = Cases.objects.get(case_reference_no=case_reference_no)
    return case.case_type

def get_case_creation_date(self, case_reference_no):
    case = Cases.objects.get(case_reference_no=case_reference_no)
    return case.case_creation_date

class CNICGet(APIView):
   
   def get(self, request, email, format=None):
        CNIC = Lawyer.objects.filter(lawyer_email=email)
        # return CNIC.first().lawyer_cnic
        return JsonResponse(data= {"CNIC": CNIC.first().lawyer_cnic if CNIC else ''})         