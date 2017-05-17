from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic.base import TemplateView
from rest_framework.routers import DefaultRouter

from quickly.buttons.api.view import ButtonViewSet
from quickly.schedules.api.view import SchedulesViewSet
from quickly.services.api.view import ServiceViewSet
from quickly.families.api.view import FamilyViewSet

from quickly.panic.api.views import PanicGet

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='spindle.html'), name='spindle'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/panic/get/$', PanicGet.as_view()),
]

# Define routes, using the default router so the API is browsable.
router = DefaultRouter()
router.register(r'api/schedules', SchedulesViewSet)
router.register(r'api/services', ServiceViewSet)
router.register(r'api/buttons', ButtonViewSet)
router.register(r'api/families', FamilyViewSet)
urlpatterns += router.urls


if settings.DEBUG and settings.MEDIA_ROOT:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
