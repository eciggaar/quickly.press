from quickly.services.models import Service
from rest_framework import serializers


class ServiceSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Service
        fields = '__all__'
