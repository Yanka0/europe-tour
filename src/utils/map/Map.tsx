import React, {useEffect, useRef} from 'react';

interface MapProps {
  waypoints: google.maps.LatLngLiteral[];
}

const Map: React.FC<MapProps> = ({waypoints}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  let directionsService: google.maps.DirectionsService;
  let directionsRenderer: google.maps.DirectionsRenderer;

  useEffect(() => {
    if (!mapRef.current) return;

    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA6M4k_bWmH3_k7FwLPvTLLfMNlMMomJYQ&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', initializeMap);

    return () => {
      googleMapScript.removeEventListener('load', initializeMap);
    };
  });

  const initializeMap = () => {
    const map = new google.maps.Map(mapRef.current!, {
      center: waypoints[0],
      zoom: 6,
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
      map,
    });

    calculateAndDisplayRoute();
  };

  const calculateAndDisplayRoute = () => {
    if (waypoints.length < 2) return;

    const origin = waypoints[0];
    const destination = waypoints[waypoints.length - 1];
    const waypointsWithoutOriginAndDestination = waypoints.slice(1, -1).map((waypoint) => ({
      location: waypoint,
      stopover: true,
    }));

    const request: google.maps.DirectionsRequest = {
      origin,
      destination,
      waypoints: waypointsWithoutOriginAndDestination,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (response, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {
        console.error('Directions request failed due to ' + status);
      }
    });
  };

  return <div ref={mapRef} style={{width: '100%', height: '500px'}}/>;
};

export default Map;
