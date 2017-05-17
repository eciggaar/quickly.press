from django.contrib.auth.models import User as DjangoUser

from django.db import models


class User(models.Model):
    """
    Model which defines users of the platform with authentication
    possibilities and a phone number which can be sent to
    emergency services.
    """
    user = models.OneToOneField(DjangoUser)
    phone_number = models.CharField(max_length=15)
