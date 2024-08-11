$(document).ready(function() {
    $('#review-toggle').click(function() {
        if ($(this).text() === 'show') {
            // Fetch and display reviews
            $.get('api/v1/places/<place_id>/reviews', function(data) {
                data.forEach(function(review) {
                    const reviewHTML = `
                        <li>
                            <h3>From ${review.user.name} the ${review.date}</h3>
                            <p>${review.text}</p>
                        </li>`;
                    $('#review-list').append(reviewHTML);
                });
            });
            $(this).text('hide');
        } else {
            // Hide reviews
            $('#review-list').empty();
            $(this).text('show');
        }
    });
});

