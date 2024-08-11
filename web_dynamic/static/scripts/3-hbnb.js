$(document).ready(function() {
    // Function to update API status
    function updateApiStatus() {
        $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
            if (data.status === 'OK') {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        });
    }

    // Function to fetch and display places
    function fetchPlaces() {
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({}),
            success: function(data) {
                // Clear previous content
                $('.places').empty();
                
                // Populate new content
                data.forEach(function(place) {
                    let article = $('<article></article>');
                    let title = $('<h2></h2>').text(place.name);
                    let description = $('<div></div>').text(place.description);
                    
                    article.append(title);
                    article.append(description);
                    $('.places').append(article);
                });
            }
        });
    }

    // Initial API status check and places fetch
    updateApiStatus();
    fetchPlaces();
});
