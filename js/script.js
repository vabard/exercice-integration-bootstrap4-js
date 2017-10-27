$(function () { //Verification de la disponibilité du DOM avant d'exécuter du code jQuery

    $("h1").fadeIn(2000);

    // Event Bouton LoadMore
    $(".news-card").slice(0, 6).show();
    $("#loadMore").on('click', function () {
        $(".news-card:hidden").slice(0, 3).slideDown('slow');

        //s'il n'y a plus d'éléments à afficher, le btn LoadMore disparait et le btn Back to top apparait
        if ($(".news-card:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
            $('#totop').fadeIn();
        }
    });

    // Event Back to top
    $('#totop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

