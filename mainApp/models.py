from django.db import models

class Client(models.Model):
    client_cnic = models.CharField(primary_key=True, unique=True, db_index=True, max_length=13)
    client_name = models.CharField(max_length=100, null=False)
    client_age = models.IntegerField(null=False)
    client_email = models.EmailField()
    client_phone = models.CharField(max_length=13)
    # client_details = models.TextField()
    client_password = models.CharField(null=False, max_length=30)


class Lawyer(models.Model):

    lawyer_cnic = models.CharField(primary_key=True, unique=True, db_index=True, max_length=13)
    lawyer_name = models.CharField(max_length=100, null=False)
    lawyer_age = models.IntegerField(null=False)
    lawyer_email = models.EmailField()
    lawyer_phone = models.CharField(max_length=13)
    lawyer_qualification = models.CharField(max_length=100, default='LLB')
    lawyer_specialization = models.CharField(max_length=200)
    lawyer_password = models.CharField(null=False, max_length=30)

class Cases(models.Model):
    OPEN = 'OP'
    ACCEPTED = 'AC'
    CLOSED = 'CL'
    REJECTED = 'RE'
    
    CASE_STATUS = [
        (OPEN, 'Open'),
        (ACCEPTED, 'Accepted'),
        (CLOSED, 'Closed'),
        (REJECTED, 'Rejected')
    ]

    FRESHMAN = 'FR'
    SOPHOMORE = 'SO'
    JUNIOR = 'JR'
    SENIOR = 'SR'
    GRADUATE = 'GR'

    TYPES_OF_CASES = [
        (FRESHMAN, 'Freshman'),
        (SOPHOMORE, 'Sophomore'),
        (JUNIOR, 'Junior'),
        (SENIOR, 'Senior'),
        (GRADUATE, 'Graduate'),
    ]

    case_reference_no = models.AutoField(primary_key=True, unique=True, db_index=True)
    lawyer_id = models.ForeignKey(Lawyer, on_delete=models.DO_NOTHING)
    client_id = models.ForeignKey(Client, on_delete=models.DO_NOTHING, related_name='client')
    case_creation_date = models.DateTimeField()
    case_status = models.CharField(
        max_length=2,
        choices=CASE_STATUS,
        default=OPEN,
    )
    case_details = models.TextField()
    case_type = models.CharField(
        max_length=2,
        choices=TYPES_OF_CASES,
        default=FRESHMAN,
    )

    
    
