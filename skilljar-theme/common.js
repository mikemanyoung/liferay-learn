function cueCoursePurchase() {
  var purchaseButtonPrice = $(".purchase-button-price").html();

  if (!purchaseButtonPrice || purchaseButtonPrice.indexOf("FREE") >= 0) {
    return;
  }

  $('.purchase-button').click(function(e) {
    e.preventDefault();
    $('#terms-modal').show();
  })

  $('.btn-okay').click(function() {
    window.location.href = $('.purchase-button').attr('href');
  })

  $('.btn-cancel').click(function() {
    $('#terms-modal').hide();
  })
}

function cueDropShadow() {

  var element = $('#header');
  var className = 'box-shadow';

   $(document).scroll(function() {

     if ($(document).scrollTop() >= 50) {
      element.addClass(className);
     } 
     else {
       element.removeClass(className);
     }
  });
}

function cueDetailsPane() {
  $('#details-pane-closed').attr('class', 'details-pane-open');

  $('.sj-text-details span').text('Exercise');
  $('.sj-text-details-pane-summary span').text('Exercise');
}

function cueFooter() {
  $('#ep-footer').attr('id', 'lr-footer');
  $('#lr-footer').html('© 2019 Liferay Inc. All Rights Reserved');
}

function cueHighlightTiles() {
  var lessons = document.querySelectorAll("a[data-tags='xz-lesson']");
  var i;

  for (i = 0; i < lessons.length; ++i) {
    lessons[i].style.borderBottom = "4px solid #0B63CE";
  }

  var courses= document.querySelectorAll("a[data-tags='xz-course-1']");
  var j;

  for (j = 0; j < courses.length; ++j) {
    courses[j].style.borderBottom = "4px solid #FDCC4A";
  }
}

function cueDisablePricing() {
  if ($('#total-price').length <= 0) {
    return;
  }

  $(".sj-text-price").css("display", "none");
  $(".sj-text-price").next().css("display", "none");

  $(".sj-text-subtotal").css("display", "none");
  $("#subtotal").css("display", "none");

  $(".sj-text-total").css('display', "none");
  $("#total-price").css("display", "none");
}

function cueExitFullScreenVideo() {
  if ($('.sj-page-lesson')) {
    $(document).ajaxComplete(function() {
      wistiaEmbed.bind("end", function() {
        if (document.fullscreenElement || document.webkitFullscreenElement ||
            document.mozFullScreenElement || document.msFullscreenElement) {

          if (document.exitFullscreen) {
              document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
          }
        }
      });
    });
  }
}

function cuePassportOwner() {
  $("#header-right").prepend($("#passport-owner").html());
}

function cuePassportPurchase() {
  if ($('#id_domain_access_signup_flow') <= 0) {
    return;
  }

  // Change labels for radio options on passport.liferay.com.

  $('label[for="id_domain_access_signup_flow_0"]').contents().last()[0].textContent='Enter your Liferay University Passport access code.';
  $('label[for="id_domain_access_signup_flow_1"]').contents().last()[0].textContent='Purchase a Liferay University Passport.';

  // Validation for continue button
  if ($('#id_custom_24zitnekfjb34').length) {
    $('#id_custom_24zitnekfjb34').click(function () {
      $('#login-content .sj-text-continue').prop("disabled", !$("#id_custom_24zitnekfjb34").prop("checked")); 
    })

    $('#login-content .sj-text-continue').attr("disabled","disabled"); 
  }
    
  $('#login-content .sj-text-continue').attr('value','Agree and Continue'); 

  $("<div class='signup-hero'></div>").insertBefore('#login-content');
}

function popup(url) {
  var newwindow = window.open(url,'name','height=400,width=600');
  
  if (window.focus) {
    newwindow.focus();
  }
}