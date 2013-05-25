$(function() {
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
});