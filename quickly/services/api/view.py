from rest_framework.viewsets import ModelViewSet

from quickly.services.api.serializer import ServiceSerializer
from quickly.services.models import Service


class ServiceViewSet(ModelViewSet):

    # Set the queryset, without .all() this filters on the tenant and takes care of setting the `base_name`.
    queryset = Service.objects.all()
    # Set the serializer class for this viewset.
    serializer_class = ServiceSerializer
