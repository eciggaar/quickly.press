from rest_framework.viewsets import ModelViewSet

from quickly.schedules.api.serializer import ScheduleSerializer
from quickly.schedules.models import Schedule


class SchedulesViewSet(ModelViewSet):

    # Set the queryset, without .all() this filters on the tenant and takes care of setting the `base_name`.
    queryset = Schedule.objects.all()
    # Set the serializer class for this viewset.
    serializer_class = ScheduleSerializer
