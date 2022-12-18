from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from mainApp.views import ClientsList, ClientDetail, LawyerDetail, LawyerList, CaseList, CaseDetail, SignUpAsClient, SignUpAsLaywer, LoginAsLaywer,LoginAsClient, accept_case, close_case, get_accepted_cases, get_case_creation_date, get_case_details, get_case_status, get_case_type, get_cases, get_closed_cases, get_freshman_cases, get_graduate_cases, get_junior_cases, get_lawyer_details, get_lawyer_email, get_lawyer_name, get_lawyer_phone, get_lawyer_qualification, get_lawyer_specialization, get_open_cases, get_rejected_cases, get_senior_cases, get_sophomore_cases, place_case, reject_case
 
# urlpatterns = [
#     path('clients/', ClientsList.as_view()),
#     path('clients/<int:pk>/', ClientDetail.as_view()),
#     path('lawyers/', LawyerList.as_view()),
#     path('lawyers/<int:pk>/', LawyerDetail.as_view()),
#     path('cases/', CaseList.as_view()),
#     path('cases/<int:pk>/', CaseDetail.as_view()),
#     path('signup/lawyer/', SignUpAsLaywer.as_view()),
#     path('signup/client/', SignUpAsClient.as_view()),
#     path('login/lawyer/', LoginAsLaywer.as_view()),
#     path('login/client/', LoginAsClient.as_view()),
# ]

urlpatterns = [
    path('clients/', ClientsList.as_view()),
    path('clients/<int:pk>/', ClientDetail.as_view()),
    path('lawyers/', LawyerList.as_view()),
    path('lawyers/<int:pk>/', LawyerDetail.as_view()),
    path('cases/', CaseList.as_view()),
    path('cases/<int:pk>/', CaseDetail.as_view()),
    path('signup/lawyer/', SignUpAsLaywer.as_view()),
    path('signup/client/', SignUpAsClient.as_view()),
    path('login/lawyer/', LoginAsLaywer.as_view()),
    path('login/client/', LoginAsClient.as_view()),
    path('client/place-case/', place_case),
    path('client/accept-case', accept_case),
    path('client/reject-case', reject_case),
    path('client/close-case', close_case),
    path('client/get-cases', get_cases),
    path('client/get-open-cases', get_open_cases),
    path('client/get-accepted-cases', get_accepted_cases),
    path('client/get-closed-cases', get_closed_cases),
    path('client/get-rejected-cases', get_rejected_cases),
    path('client/get-freshman-cases', get_freshman_cases),
    path('client/get-sophomore-cases', get_sophomore_cases),
    path('client/get-junior-cases', get_junior_cases),
    path('client/get-senior-cases', get_senior_cases),
    path('client/get-graduate-cases', get_graduate_cases),
    path('client/get-case-details', get_case_details),
    path('client/get-lawyer-details', get_lawyer_details),
    path('client/get-lawyer-name', get_lawyer_name),
    path('client/get-lawyer-email', get_lawyer_email),
    path('client/get-lawyer-phone', get_lawyer_phone),
    path('client/get-lawyer-qualification', get_lawyer_qualification),
    path('client/get-lawyer-specialization', get_lawyer_specialization),
    path('client/get-case-status', get_case_status),
    path('client/get-case-type', get_case_type),
    path('client/get-case-creation-date', get_case_creation_date),
]
urlpatterns = format_suffix_patterns(urlpatterns)
