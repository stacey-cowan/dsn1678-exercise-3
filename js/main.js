var sales = $('.sales');
var salesDetails = $('.sales__details');
var salesClickHandler = function () {
    var isActive = salesDetails.attr('data-state');
    
    if (isActive == 'active') {
        salesDetails.attr('data-state', 'inactive');
    } else {
        salesDetails.attr('data-state', 'active');    
    }
    
    
};
    
    
sales.on('click', salesClickHandler);