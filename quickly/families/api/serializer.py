from quickly.families.models import FamilyMember
from rest_framework import serializers


class FamilySerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = FamilyMember
        fields = '__all__'
