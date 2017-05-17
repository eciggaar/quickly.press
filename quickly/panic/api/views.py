from rest_framework.response import Response
from rest_framework.views import APIView

import messagebird


class PanicGet(APIView):
    """
    A custom endpoint for GET request.
    """
    def get(self, request, format=None):
        """
        Send a message via MessagBird and return the status.
        """

        api_token = 'RTDWFuAIoGzINuBTRDl5uDOiO'
        client = messagebird.Client(api_token)

        message = client.message_create(
            'MessageBird',
            ['+31614665916'],
            'panic ... Panic ... PANIC',
            { 'reference' : 'quicklypress' },
        )

        voice_message = client.voice_message_create(
            '+31614665916',
            'Panic, panic, panic',
            {'language' : 'en-gb', 'voice': 'female' },
        )
        return Response({"success": True, "content": "Panic message sent."})
