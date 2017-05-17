from django.conf import settings

from django.db import models


class User(models.Model):
    """
    Model which defines users of the platform with authentication
    possibilities and a phone number which can be sent to
    emergency services.
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    phone_number = models.CharField(max_length=15)
