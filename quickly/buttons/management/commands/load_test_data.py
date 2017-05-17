from datetime import datetime

from django.contrib.auth.models import User
from django.core.management.base import BaseCommand

from quickly.buttons.models import EmergencyButtonClient
from quickly.families.models import FamilyMember
from quickly.schedules.models import Schedule
from quickly.services.models import Service


class Command(BaseCommand):

    def handle(self, *args, **options):
        user = User.objects.create(first_name='Test',
                                   last_name='Achternaam',
                                   )
        client = EmergencyButtonClient.objects.create(id=1,
                                                      user=user,
                                                      address='Teststraat 1 Teststad',
                                                      phone_number='+31101010101',
                                                      button_uuid='test01',
                                                      language='nl')
        family_member_1 = FamilyMember.objects.create(phone_number='+31010101010',
                                                      email='test1@test.nl',
                                                      emergency_button_client=client,
                                                      name='Fam1')
        family_member_2 = FamilyMember.objects.create(phone_number='+31010101011',
                                                      email='test2@test.nl',
                                                      emergency_button_client=client,
                                                      name='Fam2')
        Schedule.objects.create(start=datetime(year=2017, month=1, day=1, hour=9, minute=0).time(),
                                end=datetime(year=2017, month=1, day=1, hour=17, minute=0).time(),
                                emergency_button_client=client,
                                family_member=family_member_1)
        Schedule.objects.create(start=datetime(year=2017, month=1, day=1, hour=17, minute=0).time(),
                                end=datetime(year=2017, month=1, day=1, hour=23, minute=0).time(),
                                emergency_button_client=client,
                                family_member=family_member_2)
        Service.objects.create(name='Emergency',
                               phone_number='112',
                               family_member=family_member_1,
                               emergency_button_client=client)

