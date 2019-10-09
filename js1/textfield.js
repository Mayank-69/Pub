var khem=1,khem1=1,khem2=1,khem3=1;
// duration of scroll animation
var scrollDuration = 300;
// paddles
// var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');
var rightPaddle1 = document.getElementsByClassName('right1-paddle1');
var rightPaddle2 = document.getElementsByClassName('right2-paddle2');
var rightPaddle3 = document.getElementsByClassName('right3-paddle3');
// var khem =document.getElementById("khem");
// var pranay =document.getElementById("pranay");
// get items dimensions
var itemsLength = $('.item').length;
var itemSize = $('.item').outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
// var getMenuWrapperSize = function() {
// 	return $('.menu-wrapper').outerWidth();
// }
var menuWrapperSize = 2250
// the wrapper is responsive
$(window).on('resize', function() {
	menuWrapperSize =2250
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
// var getMenuSize = function() {
// 	return itemsLength * itemSize;
// };
var menuSize = 2700
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function() {
	return $('.menu').scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$('.menu').on('scroll', function() {

	// get how much of menu is invisible
	menuInvisibleSize = menuSize - menuWrapperSize;
	// get how much have we scrolled so far
	var menuPosition = getMenuPosition();

	var menuEndOffset = menuInvisibleSize - paddleMargin;

	// show & hide the paddles 
	// depending on scroll position
	if (menuPosition <= paddleMargin) {
		// $(leftPaddle).addClass('hidden');
		$(rightPaddle).removeClass('visible');
	} else if (menuPosition < menuEndOffset) {
		// show both paddles in the middle
		// $(leftPaddle).removeClass('visible');
		$(rightPaddle).removeClass('visible');
	} else if (menuPosition >= menuEndOffset) {
		// $(leftPaddle).removeClass('hidden');
		$(rightPaddle).addClass('visible');
}

	// print important values
	$('#print-wrapper-size span').text(menuWrapperSize);
	$('#print-menu-size span').text(menuSize);
	$('#print-menu-invisible-size span').text(menuInvisibleSize);
	$('#print-menu-position span').text(menuPosition);

});

// scroll to left

$(rightPaddle).on('click', function() 
{

khem++;


switch(khem)
{
	
	
	case 1:
		{
			console.log(khem);
			
			
			break;
		}	
	case 2:
	{
		console.log(khem);
		$('.menu').animate( { scrollLeft: '450'}, scrollDuration);
		break;
	}	
	case 3:
	{
		console.log(khem);
		$('.menu').animate( { scrollLeft: '900'}, scrollDuration);
		break;
	}
	case 4:
	{
		console.log(khem);
		$('.menu').animate( { scrollLeft: '1350'}, scrollDuration);
		break;
	}	
	case 5:
	{
		console.log(khem);
		$('.menu').animate( { scrollLeft: '1800'}, scrollDuration);
		break;
	}
	case 6:
	{
		console.log(khem);
		$('.menu').animate( { scrollLeft: '2250'}, scrollDuration);
		break;
	}	
	case 7:
	{
		console.log(khem);
		$('.menu').animate( { scrollLeft: '2700'}, scrollDuration);
		break;
	}
	case 8:
	{
		console.log(khem);
		$('.menu').animate( { scrollLeft: '3150'}, scrollDuration);
		break;
	}	
	case 9:
	{
		console.log(khem);
		$('.menu').animate( { scrollLeft: '3600'}, scrollDuration);
		break;
	}
	case 10:
	{
		console.log(khem);
		$('.menu').animate( { scrollLeft: '4050'}, scrollDuration);
		khem++;
		console.log(khem);
		break;

	}	
	default:
	{

		console.log(khem);
		$('.menu').animate( { scrollLeft: '0'}, scrollDuration);
		khem=1;
		break;
	}

}



});
// scroll to right
$(rightPaddle1).on('click', function() 
{

khem1++;


switch(khem1)
{
	
	
	case 1:
		{
			console.log(khem1);
			
			
			break;
		}	
	case 2:
	{
		console.log(khem1);
		$('.menu1').animate( { scrollLeft: '450'}, scrollDuration);
		break;
	}	
	case 3:
	{
		console.log(khem1);
		$('.menu1').animate( { scrollLeft: '900'}, scrollDuration);
		break;
	}
	case 4:
	{
		console.log(khem1);
		$('.menu1').animate( { scrollLeft: '1350'}, scrollDuration);
		break;
	}	
	case 5:
	{
		console.log(khem1);
		$('.menu1').animate( { scrollLeft: '1800'}, scrollDuration);
		break;
	}
	case 6:
	{
		console.log(khem1);
		$('.menu1').animate( { scrollLeft: '2250'}, scrollDuration);
		break;
	}	
	case 7:
	{
		console.log(khem1);
		$('.menu1').animate( { scrollLeft: '2700'}, scrollDuration);
		break;
	}
	case 8:
	{
		console.log(khem1);
		$('.menu1').animate( { scrollLeft: '3150'}, scrollDuration);
		break;
	}	
	case 9:
	{
		console.log(khem1);
		$('.menu1').animate( { scrollLeft: '3600'}, scrollDuration);
		break;
	}
	case 10:
	{
		console.log(khem1);
		$('.menu1').animate( { scrollLeft: '4050'}, scrollDuration);
		khem1++;
		console.log(khem1);
		break;

	}	
	default:
	{

		console.log(khem1);
		$('.menu1').animate( { scrollLeft: '0'}, scrollDuration);
		khem1=1;
		break;
	}

}



});
$(rightPaddle2).on('click', function() 
{

khem2++;


switch(khem2)
{
	
	
	case 1:
		{
			console.log(khem2);
			
			
			break;
		}	
	case 2:
	{
		console.log(khem2);
		$('.menu2').animate( { scrollLeft: '450'}, scrollDuration);
		break;
	}	
	case 3:
	{
		console.log(khem2);
		$('.menu2').animate( { scrollLeft: '900'}, scrollDuration);
		break;
	}
	case 4:
	{
		console.log(khem2);
		$('.menu2').animate( { scrollLeft: '1350'}, scrollDuration);
		break;
	}	
	case 5:
	{
		console.log(khem2);
		$('.menu2').animate( { scrollLeft: '1800'}, scrollDuration);
		break;
	}
	case 6:
	{
		console.log(khem2);
		$('.menu2').animate( { scrollLeft: '2250'}, scrollDuration);
		break;
	}	
	case 7:
	{
		console.log(khem2);
		$('.menu2').animate( { scrollLeft: '2700'}, scrollDuration);
		break;
	}
	case 8:
	{
		console.log(khem2);
		$('.menu2').animate( { scrollLeft: '3150'}, scrollDuration);
		break;
	}	
	case 9:
	{
		console.log(khem2);
		$('.menu2').animate( { scrollLeft: '3600'}, scrollDuration);
		break;
	}
	case 10:
	{
		console.log(khem2);
		$('.menu2').animate( { scrollLeft: '4050'}, scrollDuration);
		khem2++;
		console.log(khem2);
		break;

	}	
	default:
	{

		console.log(khem2);
		$('.menu2').animate( { scrollLeft: '0'}, scrollDuration);
		khem2=1;
		break;
	}

}



});

$(rightPaddle3).on('click', function() 
{

khem3++;


switch(khem3)
{
	
	
	case 1:
		{
			console.log(khem3);
			
			
			break;
		}	
	case 2:
	{
		console.log(khem3);
		$('.menu3').animate( { scrollLeft: '450'}, scrollDuration);
		break;
	}	
	case 3:
	{
		console.log(khem3);
		$('.menu3').animate( { scrollLeft: '900'}, scrollDuration);
		break;
	}
	case 4:
	{
		console.log(khem3);
		$('.menu3').animate( { scrollLeft: '1350'}, scrollDuration);
		break;
	}	
	case 5:
	{
		console.log(khem3);
		$('.menu3').animate( { scrollLeft: '1800'}, scrollDuration);
		break;
	}
	case 6:
	{
		console.log(khem3);
		$('.menu3').animate( { scrollLeft: '2250'}, scrollDuration);
		break;
	}	
	case 7:
	{
		console.log(khem3);
		$('.menu3').animate( { scrollLeft: '2700'}, scrollDuration);
		break;
	}
	case 8:
	{
		console.log(khem3);
		$('.menu3').animate( { scrollLeft: '3150'}, scrollDuration);
		break;
	}	
	case 9:
	{
		console.log(khem3);
		$('.menu3').animate( { scrollLeft: '3600'}, scrollDuration);
		break;
	}
	case 10:
	{
		console.log(khem3);
		$('.menu3').animate( { scrollLeft: '4050'}, scrollDuration);
		khem3++;
		console.log(khem3);
		break;

	}	
	default:
	{

		console.log(khem3);
		$('.menu3').animate( { scrollLeft: '0'}, scrollDuration);
		khem3=1;
		break;
	}

}



});

                                    function openCity(evt, cityName) {
                                      var i, tabcontent, tablinks;
                                      tabcontent = document.getElementsByClassName("tabcontent");
                                      for (i = 0; i < tabcontent.length; i++) {
                                        tabcontent[i].style.display = "none";
                                      }
                                      tablinks = document.getElementsByClassName("tablinks");
                                      for (i = 0; i < tablinks.length; i++) {
                                        tablinks[i].className = tablinks[i].className.replace(" active", "");
                                      }
                                      document.getElementById(cityName).style.display = "block";
                                      evt.currentTarget.className += " active";
                                    }
                                    