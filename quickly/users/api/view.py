from rest_framework.viewsets import ModelViewSet

from quickly.users.api.serializer import UserSerializer
from quickly.users.models import User


class UserViewSet(ModelViewSet):

    # Set the queryset, without .all() this filters on the tenant and takes care of setting the `base_name`.
    queryset = User.objects.all()
    # Set the serializer class for this viewset.
    serializer_class = UserSerializer
