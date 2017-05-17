from rest_framework.viewsets import ModelViewSet

from quickly.families.api.serializer import FamilySerializer
from quickly.families.models import FamilyMember


class FamilyViewSet(ModelViewSet):

    # Set the queryset, without .all() this filters on the tenant and takes care of setting the `base_name`.
    queryset = FamilyMember.objects.all()
    # Set the serializer class for this viewset.
    serializer_class = FamilySerializer
