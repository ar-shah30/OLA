from rest_framework import serializers
from mainApp.models import Client, Lawyer, Cases
import datetime

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'


class LawyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lawyer
        fields = '__all__'

class CaseSerializer(serializers.Serializer):
    case_reference_no = serializers.CharField(required=False, max_length=13)
    lawyer_id = serializers.CharField(required=False, max_length=13)
    client_id = serializers.CharField(required=True, max_length=13)
    case_creation_date = serializers.DateTimeField(required = False)
    case_details = serializers.CharField(required=False)
    # import pdb; pdb.set_trace()
    # def validate(self, data):
       

    def create(self, validated_data):
        
        # lawyer_id = validated_data.get('lawyer_id')
        # import pdb; pdb.set_trace()
        """
        Create and return a new case instance, given the validated data.
        """
        client = Client.objects.get(client_cnic = validated_data['client_id'])
        validated_data['case_creation_date'] = datetime.datetime.now()
        validated_data['case_status'] = Cases.OPEN
        validated_data['lawyer_id'] = Lawyer.objects.last()
        validated_data['client_id'] = client
        return Cases.objects.create(**validated_data)

    # def update(self, instance, validated_data):
    #     """
    #     Update and return an existing `Snippet` instance, given the validated data.
    #     """
    #     instance.title = validated_data.get('title', instance.title)
    #     instance.code = validated_data.get('code', instance.code)
    #     instance.linenos = validated_data.get('linenos', instance.linenos)
    #     instance.language = validated_data.get('language', instance.language)
    #     instance.style = validated_data.get('style', instance.style)
    #     instance.save()
    #     return instance

class CasesDetailSerializer(serializers.ModelSerializer):
    model = Cases
    fields = '__all__'

class CaseSerializerForLawyer(serializers.Serializer):
    case_reference_no = serializers.CharField(required=False, max_length=13)
    lawyer_name = serializers.SerializerMethodField()
    client_name = serializers.SerializerMethodField()
    case_creation_date = serializers.DateTimeField(required = False)
    case_details = serializers.CharField(required=False)

    def get_lawyer_name(self, obj):
        lawyer = f'{obj.lawyer_id.lawyer_name}'
        return lawyer
    
    def get_client_name(self, obj):
        client = f'{obj.client_id.client_name}'
        return client