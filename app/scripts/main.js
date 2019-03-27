$(document).ready(function () {
  $('#character--desk').slick({
    dots:true,
    slidesToShow: 4,
    slidesToScroll:2,
    // autoplssay:true,
    speed:3000,
    infinite:true, 
  });
  $('#novellas--desk').slick({
    dots:true,
    slidesToShow: 4,
    slidesToScroll:4,
    // autoplay:true,
    speed:3000,
    infinite:true, 
    arrows:false,
  });
  $('.test').slick({
    dots:true,
    slidesToShow: 4,
    slidesToScroll:4,
    autoplay:true,
    speed:3000,
    infinite:true, 
    arrows:false,
  });
  $('#character--mobile').slick(
    {
      autoplay:true,
      speed:2000,
      arrows:false,
    }
  );
  $('#novellas--mobile').slick(
    {
      autoplay:true,
      speed:2000,
      arrows:false,
    }
  );
  
  $('#menu--mobile').focus(function(){
    $('#menu--mobile--list').show();
  });
  $(function(){				
    var $win = $(window);
    var $box = $('#menu--mobile');
    
     $win.on('click.Bst', function(event){		
      if ( 
        $box.has(event.target).length == 0 
        &&
        !$box.is(event.target)
      ){
        $('#menu--mobile--list').hide();
      } else {
        $('#menu--mobile--list').show();
      }
    });

});
  $('.ourworld__content__content--row--item').on('click', function(){

    var urlimge= $(this).attr('src');
    var modal =$('<div class="modal" id="myModal"> <div class="modal-dialog modal-lg ">  <div class="modal-content">  <div class="modal-header"> <h3>Detail</h3><button type="button" class="close" data-dismiss="modal">&times;</button>'
                  +' <div class="modal-body"> <img src="'+urlimge+'" alt="" width="400" height="400"></div>'
                  +' <div class="modal-footer"> <button type="button" id="btnclose" class="btn btn-danger" data-dismiss="modal">Close</button> </div>'  
                  +'</div> </div> </div>');
    $('.ourworld__content__content--row--item').parent().append(modal);
    $('#btnclose').on('click',function(){
      $('#btnclose').parents('#myModal').remove();
    });
  })
});
  

 
 
 
                  