from django.db import models

from ..buttons.models import EmergencyButtonClient
from ..families.models import FamilyMember


class Schedule(models.Model):
    """
    Model which defines the schedule which families need to be alarmed.
    """
    start = models.TimeField()
    end = models.TimeField()
    emergency_button_client = models.ForeignKey(EmergencyButtonClient)
    family_member = models.ForeignKey(FamilyMember)
