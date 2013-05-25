$(function() {
    $('.ball').fadeOut(0);
    $('img#snipe').snipe();
    $('#content2').hide();
    $('#content3').hide();
    $('#id1').on('click',function(event){
    	$('#id2').removeClass('active');
    	$('#id3').removeClass('active');
    	$('#id1').addClass('active');

    	$('#content1').fadeIn();
    	$('#content2').hide();
    	$('#content3').hide();
    });
    $('#id2').on('click',function(event){
    	$('#id1').removeClass('active');
    	$('#id3').removeClass('active');
    	$('#id2').addClass('active');

    	$('#content2').fadeIn();
    	$('#content1').hide();
    	$('#content3').hide();
    });
    $('#id3').on('click',function(event){
        $('#id2').removeClass('active');
        $('#id1').removeClass('active');
        $('#id3').addClass('active');

        $('#content3').fadeIn();
        $('#content1').hide();
        $('#content2').hide();
    });

function GetDomOffset( Obj, Prop ) {
    var iVal = 0;
    while (Obj && Obj.tagName != 'BODY') {
        eval('iVal += Obj.' + Prop + ';');
        Obj = Obj.offsetParent;
    }
    return iVal;
}

    $('#call').on('click',function(event){

        var id= $(this).attr('id');
        var fromleft = GetDomOffset( document.getElementById(id), 'offsetLeft' );
        var fromtop = GetDomOffset( document.getElementById(id), 'offsetTop' );
        var totop = GetDomOffset( document.getElementById("cart"), 'offsetTop' );
        var toleft = GetDomOffset( document.getElementById("cart"), 'offsetLeft' );

        $('.ball').css( "left", fromleft);
        $('.ball').css( "top", fromtop );

        $('.ball').fadeIn(100);
        setTimeout(function(){
        $('.ball').animate({'left': toleft+100},{ queue: false, duration: 1000 });
            setTimeout(function(){
            $('.ball').animate({'top': screen.width},{ queue: false, duration: 500 });

            },550)
        },100)


    });
});

