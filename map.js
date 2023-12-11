let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 28.70, lng: 77.10 },
        zoom: 8,
        mapTypwId: "terrain"
    });
    new google.maps.Marker({
        position: { lat: 28.70, lng: 77.10 },
        map: map,
        label: "A",
        title: "Georgia",
        draggable: false,
        animation: google.maps.Animation.DROP
    });

    const infoWindow = new google.maps.infoWindow({
        content: "<p>This is an info window</p>"
    });
    infoWindow.open(map, marker);
}