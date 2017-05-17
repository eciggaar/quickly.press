from quickly.buttons.models import EmergencyButtonClient
from rest_framework import serializers


class ButtonSerializer(serializers.ModelSerializer):

    class Meta:
        model = EmergencyButtonClient
        fields = '__all__'
