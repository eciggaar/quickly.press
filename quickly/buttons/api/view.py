from rest_framework.viewsets import ModelViewSet

from quickly.buttons.api.serializer import ButtonSerializer
from quickly.buttons.models import EmergencyButtonClient


class ButtonViewSet(ModelViewSet):

    # Set the queryset, without .all() this filters on the tenant and takes care of setting the `base_name`.
    queryset = EmergencyButtonClient.objects.all()
    # Set the serializer class for this viewset.
    serializer_class = ButtonSerializer
