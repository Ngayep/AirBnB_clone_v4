let selected = {};
let listofAm = {};

$(document).ready(function () {
    // We want a statement that declares if the box gets checked
    // THEN, store the amenity ID in variable named checked
    // Else, delete data in checked
    // Will need to use $(this) a lot
    $('input:checkbox').change(function () {
	if ($(this).is(':selected')) {
	    selected[$(this).data('id') = $(this).data('name');
	} else {
	    delete selected[$(this).data('id')];
	}
        $('DIV.amenities h4').html(function () {
	    selected.pop($(this).attr('data-name'));
	    listofAm.pop($(this).attr('data-id'));
	}
});
