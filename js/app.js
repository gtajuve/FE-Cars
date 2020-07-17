$(document).ready(function() {
    $(document).ready(function(){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 600
        });
    });
    $(".tablinks").click( e => {
        e.preventDefault();
        let currentEl = e.target;
        $(".tablinks").removeClass("active");
        $(currentEl).addClass('active');
        const tabId = $(currentEl).data('tab');
        $('.tabcontent').css("display","none");
        $('#'+tabId).css("display","block");
    })

});
