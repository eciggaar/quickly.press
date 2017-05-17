from django.db import models

from ..buttons.models import EmergencyButtonClient
from ..families.models import FamilyMember


class Service(models.Model):
    """
    Model which defines services that need to be contacted when a emergency
    occurs.
    """
    name = models.TextField()
    phone_number = models.CharField(max_length=15)
    family_member = models.ForeignKey(FamilyMember)
    emergency_button_client = models.ForeignKey(EmergencyButtonClient)
