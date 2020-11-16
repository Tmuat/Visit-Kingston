function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 51.4106257,
            lng: -0.3048283
        }
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let locations = [
        { lat: 51.408123, lng: -0.307551 }, 
        { lat: 51.4085544, lng: -0.3070869 },
        { lat: 51.407777, lng: -0.307755 },
        { lat: 51.407456, lng: -0.307627 },
        { lat: 51.407158, lng: -0.307922 },
        { lat: 51.406880, lng: -0.307869 },
        { lat: 51.408921, lng: -0.306276 },
        { lat: 51.410503, lng: -0.308063 },
        { lat: 51.410863, lng: -0.307936 },
        { lat: 51.4103852, lng: -0.3069863 },
        { lat: 51.4090665, lng: -0.3055996 },
        { lat: 51.412026, lng: -0.305403 },
        { lat: 51.4119411, lng: -0.2998676 },
        { lat: 51.4116456, lng: -0.2993251 },
        { lat: 51.410926, lng: -0.301108 },
        { lat: 51.4113728, lng: -0.3006249 },
        { lat: 51.4165905, lng: -0.3069064 },
        { lat: 51.3970459, lng:  -0.3120035 },
        { lat: 51.4125322, lng: -0.3108998 },
        { lat: 51.410728, lng: -0.307948 },
        { lat: 51.410648, lng: -0.307986 },
        { lat: 51.410949, lng: -0.307889 },
        { lat: 51.409954, lng: -0.308297 },
        { lat: 51.406996, lng: -0.307814},
    ];


    let markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    let markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}