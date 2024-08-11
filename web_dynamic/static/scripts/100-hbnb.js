$(document).ready(function() {
    const selectedLocations = { states: [], cities: [] };

    // Listen to changes on each input checkbox
    $('input[type="checkbox"]').change(function() {
        const id = $(this).data('id');
        const name = $(this).data('name');

        if ($(this).is(':checked')) {
            if ($(this).parent().parent().parent().is('#locations')) {
                selectedLocations.states.push({ id: id, name: name });
            } else {
                selectedLocations.cities.push({ id: id, name: name });
            }
        } else {
            if ($(this).parent().parent().parent().is('#locations')) {
                selectedLocations.states = selectedLocations.states.filter(item => item.id !== id);
            } else {
                selectedLocations.cities = selectedLocations.cities.filter(item => item.id !== id);
            }
        }

        updateLocations();
    });

    function updateLocations() {
        const locationNames = [...selectedLocations.states, ...selectedLocations.cities].map(item => item.name).join(', ');
        $('div.Locations h4').text(locationNames);
    }

    // Handle the button click to make the POST request
    $('button').click(function() {
        const amenities = Object.keys(selectedAmenities);
        const states = selectedLocations.states.map(state => state.id);
        const cities = selectedLocations.cities.map(city => city.id);

        $.ajax({
            type: 'POST',
            url: '/api/v1/places_search',
            contentType: 'application/json',
            data: JSON.stringify({ amenities, states, cities }),
            success: function(data) {
                // Handle the response and update the places section
                $('.places').empty();
                for (let place of data) {
                    $('.places').append('<article>' + place.name + '</article>');
                }
            }
        });
    });
});

