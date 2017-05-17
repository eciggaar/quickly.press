from quickly.schedules.models import Schedule
from rest_framework import serializers


class ScheduleSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Schedule
        fields = '__all__'
