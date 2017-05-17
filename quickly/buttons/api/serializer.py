from quickly.buttons.models import EmergencyButtonClient
from rest_framework import serializers


class ButtonSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = EmergencyButtonClient
        fields = '__all__'
