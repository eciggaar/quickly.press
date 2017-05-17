from rest_framework.response import Response
from rest_framework.views import APIView


class PanicGet(APIView):
  """
  A custom endpoint for GET request.
  """
  def get(self, request, format=None):
    """
    Return a hardcoded response.
    """
    return Response({"success": True, "content": "Hello World!"})
