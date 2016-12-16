$(document).ready(startApp)

function startApp() {
  toggleMenu()
  linkListener()

  function toggleMenu() {
    $(".menu__logo").find("#menu-toggle").click(function() {
      var $menuItems = $('.menu__items')
      if ( $menuItems.data('open') == true ) {
        $menuItems.data('open', false);
        $menuItems.animate({
          left: "-=200"
        }, 500)
      } else {
        $menuItems.data('open', true);
        $menuItems.animate({
          left: "+=200"
        }, 500)
      }
    })
  }

  function linkListener() {
    $home = $("#home_link")
    $about = $("#about_link")
    $apps = $("#apps_link")
    $writing = $("#writing_link")

    var menuItems = [$home, $about, $apps, $writing]
    menuItems.forEach(function(menuItem) {
      menuItem.click(function(e) {
        var targetName = e.target.id.split("_")[0]
        $('html, body').animate({scrollTop: $("#" + targetName).offset().top - 16})
      })
    })
  }
}
