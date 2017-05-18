import googlemaps
from googlemaps.exceptions import HTTPError

gmaps = googlemaps.Client('AIzaSyAwPCAuEsaMumBAn8vEurCa1sSE8mkSaxc')


def find_address(lat, long):
    # Look up an address with reverse geocoding
    # (52.3862755, 4.8728798)
    try:
        result = gmaps.reverse_geocode((lat, long))
        return result[0]['formatted_address']
    except HTTPError as e:
        print(e)
    return 'Location unknown'


def maps_web_address(lat, long):
    return 'https://maps.google.com/?q=%s%s' % (lat, long)
