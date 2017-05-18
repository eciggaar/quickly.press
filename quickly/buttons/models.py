from django.conf import settings
from django.db import models


class EmergencyButtonClient(models.Model):
    """
    Model which defines the wearer of the emergency button.
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    address = models.TextField(blank=False)
    phone_number = models.CharField(max_length=15)
    button_uuid = models.CharField(max_length=255)
    language = models.CharField(max_length=5)

    def __str__(self):
        return u'%s %s'
