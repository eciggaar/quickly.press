from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.staticfiles.views import serve
from rest_framework.routers import DefaultRouter

from quickly.buttons.api.view import ButtonViewSet
from quickly.schedules.api.view import SchedulesViewSet
from quickly.services.api.view import ServiceViewSet
from quickly.families.api.view import FamilyViewSet

from quickly.panic.api.views import Panic

# Define routes, using the default router so the API is browsable.
router = DefaultRouter(trailing_slash=False)
router.register(r'/schedules', SchedulesViewSet)
router.register(r'/services', ServiceViewSet)
router.register(r'/buttons', ButtonViewSet)
router.register(r'/families', FamilyViewSet)

urlpatterns = [
    # / routes to index.html
    url(r'^$', serve,
        kwargs={'path': 'index.html'}),

    url(r'^admin', include(admin.site.urls)),
    url(r'^api/panic/$', Panic.as_view()),
    url(r'^api', include(router.urls)),
]

if settings.DEBUG and settings.MEDIA_ROOT:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
