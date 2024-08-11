$(document).ready(function () {
    const amenities = {};

    $('input[type="checkbox"]').change(function () {
        if ($(this).is(':checked')) {
            amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete amenities[$(this).attr('data-id')];
        }

        const amenityNames = Object.values(amenities).join(', ');
        if (amenityNames.length > 0) {
            $('.amenities h4').text(amenityNames);
        } else {
            $('.amenities h4').html('&nbsp;');
        }
    });
});
