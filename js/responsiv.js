$(function (){
    
    var img_drop_down ='<img src="img/drop_down_icon.png" style="'+
                                                         'width: 25px;'+
                                                         'height: 25px;'+
                                                         'position: absolute;'+
                                                         'right: 0'+
                                                         '"/>';
                                                 
        $('.drop_down').append(img_drop_down); 
        $('.sub_menu_item').mouseover(function (){ 
           $(this).find('> div > div > div > .drop_down img').attr('src','img/drop_down_icon_hover.png');
        });
        $('.sub_menu_item').mouseout(function (){ 
           $(this).find('> div > div > div > .drop_down img').attr('src','img/drop_down_icon.png');
        });
    
    is_profile_drop_down_hidden = true;
   $('.profile_drop_down > img').click(function (){
       if($(window).width() <= 800){
            $('.nav_bar').hide();
       }
       if(is_profile_drop_down_hidden){
         height =   $('.profile_drop_down .drop_down').css('height');
         $('.profile_drop_down .drop_down').css('height','0px');
         $('.profile_drop_down .drop_down').show();
         $('.profile_drop_down .drop_down').animate({
                height: height
            }, 500);
            is_profile_drop_down_hidden = false;
       }
       else{
           is_profile_drop_down_hidden = true;
           $('.profile_drop_down .drop_down').hide();
       }
   });
   $('.nav_bar_item').mouseover(function (){
       $('.profile_drop_down .drop_down').hide();
      $('.nav_bar_item > div > div > div > .sub_menu:visible').hide(); 
      $(this).find('> div > div > div > .sub_menu').show(); 
   });
   
   $('.sub_menu_item').mouseover(function (){
      $('.sub_menu_item .sub_menu:visible').hide(); 
      $(this).find('> div > div > div > .sub_menu').show(); 
   });
   
   isNavBarHidden = true;
   $('.menu_icon').click(function (){
       if(isNavBarHidden){
           $('.nav_bar').show();
        isNavBarHidden = false;
       }
        else{
            $('.nav_bar').hide();
            $('.sub_menu').hide();
            isNavBarHidden = true;
        }
        
   });
   
   
   
});