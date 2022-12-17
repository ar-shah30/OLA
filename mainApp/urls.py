from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from mainApp.views import ClientsList, ClientDetail, LawyerDetail, LawyerList, CaseList, CaseDetail, SignUpAsClient, SignUpAsLaywer, LoginAsLaywer,LoginAsClient
 
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
]
urlpatterns = format_suffix_patterns(urlpatterns)
