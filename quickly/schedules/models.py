from django.db import models

from ..buttons.models import EmergencyButtonClient
from ..users.models import User


class Schedule(models.Model):
    """
    Model which defines the schedule which users need to be alarmed.
    """
    start = models.TimeField()
    end = models.TimeField()
    emergency_button_client = models.ForeignKey(EmergencyButtonClient)
    user = models.ForeignKey(User)
