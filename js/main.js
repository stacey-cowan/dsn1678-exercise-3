var sales = $('.sales');

var salesDetails = $('.sales__details');

var salesClickHandler = function() {
    
    var isActive = salesDetails.attr('data-state');
    
    if (isActive == 'active') {
        salesDetails.attr('data-state', 'inactive');
    } else {
        salesDetails.attr('data-state', 'active');    
    }
    
    
};
    
    
sales.on('click', salesClickHandler);


var sales1 = $('.sales1');

var salesDetails1 = $('.sales__details1');

var salesClickHandler = function() {
    
    var isActive = salesDetails1.attr('data-state');
    
    if (isActive == 'active') {
        salesDetails1.attr('data-state', 'inactive');
    } else {
        salesDetails1.attr('data-state', 'active');    
    }
    
    
};
    
    
sales1.on('click', salesClickHandler);