from quickly.families.models import FamilyMember
from rest_framework import serializers


class FamilySerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = FamilyMember
        fields = '__all__'
