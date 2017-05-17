from django.db import models

from quickly.buttons.models import EmergencyButtonClient


class FamilyMember(models.Model):
    """
    Model which defines families of the platform with authentication
    possibilities and a phone number which can be sent to
    emergency services.
    """
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    name = models.CharField(max_length=255, blank=True)
    emergency_button_client = models.ForeignKey(EmergencyButtonClient)
