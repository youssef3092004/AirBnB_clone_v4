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
