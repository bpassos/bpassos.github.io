$(document).ready(function () {  
    
    setTimeout(function() {
        $('.profile img').fadeIn( "500" );
        
        function showDribbbleShots() {
            $.jribbble.getShotsByPlayerId('brunopassos', function (playerShots) {    
                var html = [];   
                $.each(playerShots.shots, function (i, shot) {   
                    html.push('<div class="shot"><a href="' + shot.url + '" target="_blank">');    
                    html.push('<img class="shot-image" src="' + shot.image_url + '" ');    
                    html.push('alt="' + shot.title + '"></a></div>');    
                });    
                $('.dribbble-feed').html(html.join(''));   
            },     
            {    
              page: 1,     
              per_page: 15   
            });
        }
        showDribbbleShots();
        function hideSpinner() {
            $('.spinner').hide();
        }
        hideSpinner();
            
    }, 500);
});

