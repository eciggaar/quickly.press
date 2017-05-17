from django.db import models

from backend.quickly.buttons.models import EmergencyButtonClient
from backend.quickly.users.models import User


class Services(models.Model):
    """
    Model which defines services that need to be contacted when a emergency
    occurs.
    """
    name = models.TextField()
    phone_number = models.CharField(max_length=15)
    user = models.ForeignKey(User)
    emergency_button_client = models.ForeignKey(EmergencyButtonClient)
