$(document).ready(function () {
    const checkedAmenity = [];
    const amenityId = $(this).data('id');
    const index_id = checkedAmenity.indexOf(amenityId);

    $('.amenities .popover input"]').change(function(){
        if ($(this).is(':checked')) {
            checkedAmenity.push(amenityId)
        }
        else {
            checkedAmenity.splice(index_id, 1);
        }
        $('.amenities h4').text(checkedAmenity.join(', '));
    });
});

$.get('http://0.0.0.0:5001/api/v1/status/', function (data, text) {
    if (text === 'success' && data.status ==='OK'){
        $('#api_status').addClass('available');
    }
    else {
        $('#api_status').removeClass('available')
    }
});
