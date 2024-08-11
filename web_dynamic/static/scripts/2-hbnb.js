$(document).ready(function () {
    const amenities = {};
    $(document).ready(function() {
    // Define the API status URL
    const apiStatusUrl = 'http://0.0.0.0:5001/api/v1/status/';
    const $apiStatus = $('#api_status');

    // Function to check the API status
    function checkApiStatus() {
        $.get(apiStatusUrl, function(data) {
            if (data.status === 'OK') {
                $apiStatus.addClass('available');
            } else {
                $apiStatus.removeClass('available');
            }
        }).fail(function() {
            $apiStatus.removeClass('available');
        });
    }

    // Check the API status on page load
    checkApiStatus();

    // Optionally, check periodically (e.g., every 30 seconds)
    setInterval(checkApiStatus, 30000);
`});
