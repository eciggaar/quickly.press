import datetime
import json
import random

from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import detail_route

import messagebird

from ...buttons.models import EmergencyButtonClient
from ...families.models import FamilyMember
from ...geolocation.utils import maps_web_address, find_address
from ...schedules.models import Schedule


class PanicGet(APIView):
    """
    A custom endpoint for GET request.
    """
    def get(self, request, format=None):
        """
        Receive and process the status received from MessageBird.
        """

        return Response({"success": True, "content": "Panic message sent."})


class PanicPost(APIView):
    """
    A custom endpoint for PUSH request.
    """
    @detail_route(methods=['post'])
    def post(self, request, format=None):
        """
        Send a message via MessagBird and return the status.
        """
        user = EmergencyButtonClient.objects.first()
        current_time = datetime.datetime.now().time()
        family_members = FamilyMember.objects.filter(emergency_button_client=user)
        schedules = Schedule.objects.filter(family_member__in=family_members,
                                            start__lte=current_time,
                                            end__gte=current_time)

        recipients = []
        for schedule in schedules:
            recipients.append(schedule.family_member.phone_number)

        if not len(recipients):
            raise NotFound

        # get lat long, randomize a little bit for demo purpose
        lat = float(request.data.get('lat', 52.3862755)) + random.randint(-10, 10) * 0.0001
        long = float(request.data.get('long', 4.8728798)) + random.randint(-10, 10) * 0.0001

        api_token = 'RTDWFuAIoGzINuBTRDl5uDOiO'
        client = messagebird.Client(api_token)

        # sent text message
        text_message = self._create_text_message(lat, long)
        message = client.message_create(
            'MessageBird',
            recipients,
            text_message,
            {'reference': 'quicklypress'},
        )

        # sent voice message
        # voice_message = self._create_voice_message(lat, long)
        # result = client.voice_message_create(
        #     '+31614665916',
        #     voice_message,
        #     {'language': 'en-gb', 'voice': 'female'},
        # )

        return Response({'status': 'success'}, status=200)

    @staticmethod
    def _create_text_message(lat, long):
        return u'panic ... Panic ... PANIC\nLocation: %s' % maps_web_address(lat, long)
        # return u'panic ... Panic ... PANIC'

    @staticmethod
    def _create_voice_message(lat, long):
        return u'Panic, panic, panic! Location: %s' % find_address(lat, long)
