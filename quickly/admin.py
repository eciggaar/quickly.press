from django.contrib import admin

from quickly.buttons.models import EmergencyButtonClient
from quickly.schedules.models import Schedule
from quickly.services.models import Service

myModels = [EmergencyButtonClient, Schedule, Service]
admin.site.register(myModels)
