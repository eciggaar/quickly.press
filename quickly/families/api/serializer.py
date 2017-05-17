from quickly.families.models import FamilyMember
from rest_framework import serializers


class FamilySerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = FamilyMember
        fields = '__all__'
