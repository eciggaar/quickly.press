from quickly.schedules.models import Schedule
from rest_framework import serializers


class ScheduleSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Schedule
        fields = '__all__'
