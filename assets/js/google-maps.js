// Google Maps JS taken from https://developers.google.com/maps/documentation/ & https://codeinstitute.net/ 

// Set locations variables

let foodAndDrinkLocations = [{
        coords: {
            lat: 51.408123,
            lng: -0.307551
        },
        infoContent: ``
    },
    {
        coords: {
            lat: 51.4085544,
            lng: -0.3070869
        },
    },
    {
        coords: {
            lat: 51.407777,
            lng: -0.307755
        },
    },
    {
        coords: {
            lat: 51.407456,
            lng: -0.307627
        },
    },
    {
        coords: {
            lat: 51.407158,
            lng: -0.307922
        },
    },
    {
        coords: {
            lat: 51.406880,
            lng: -0.307869
        },
    },
    {
        coords: {
            lat: 51.408921,
            lng: -0.306276
        },
    },
    {
        coords: {
            lat: 51.410503,
            lng: -0.308063
        },
    },
    {
        coords: {
            lat: 51.410863,
            lng: -0.307936
        },
    },
    {
        coords: {
            lat: 51.4103852,
            lng: -0.3069863
        },
    },
    {
        coords: {
            lat: 51.4090665,
            lng: -0.3055996 
        },
    },
    {
        coords: {
            lat: 51.412026,
            lng: -0.305403
        },
    },
    {
        coords: {
            lat: 51.4119411,
            lng: -0.2998676
        },
    },
    {
        coords: {
            lat: 51.4116456,
            lng: -0.2993251
        },
    },
    {
        coords: {
            lat: 51.410926,
            lng: -0.301108
        },
    },
    {
        coords: {
            lat: 51.4113728,
            lng: -0.3006249
        },
    },
    {
        coords: {
            lat: 51.4165905,
            lng: -0.3069064
        },
    },
    {
        coords: {
            lat: 51.3970459,
            lng:  -0.3120035
        },
    },
    {
        coords: {
            lat: 51.4125322,
            lng: -0.3108998
        },
    },
    {
        coords: {
            lat: 51.410728,
            lng: -0.307948
        },
    },
    {
        coords: {
            lat: 51.410648,
            lng: -0.307986
        },
    },
    {
        coords: {
            lat: 51.410949,
            lng: -0.307889
        },
    },
    {
        coords: {
            lat: 51.409954,
            lng: -0.308297
        },
    },
    {
        coords: {
            lat: 51.406996,
            lng: -0.307814
        },
    },
];

// Create the map and markers

function initMap(filterMarkers) {
    let defaultLatlng = {
        lat: 51.4106257,
        lng: -0.3048283
    }

    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: defaultLatlng,
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (filterMarkers) {
        for (let i = 0; i < filterMarkers.length; i++) {
            let marker = new google.maps.Marker({
                position: filterMarkers[i].coords,
                map,
                label: labels[i % labels.length],
                animation: google.maps.Animation.DROP,
            });
            
            const infowindow = new google.maps.InfoWindow({
                content: filterMarkers[i].infoContent,
            });

            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
        };
    };
}

// Get the map filter clicked from index.html

document.getElementById("food_and_drink").onclick = () => {
    initMap(foodAndDrinkLocations);
};