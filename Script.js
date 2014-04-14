//script on laenatud, polnud mõtet ise ratast leiutama hakata
//algallikas: http://livven.me/2012/04/27/how-to-enlarge-images-on-click-using-css-and-javascript/
$(document).ready(function() {
        var imageLinks = $('a[href$=".png"], a[href$=".jpg"]');
        if (imageLinks.children('img').length) {
            imageLinks.children('img').each(function() {
                var imgTitle = $(this).attr('title');
                $(this).attr('title', imgTitle + ' (click to enlarge image)');
            });
            imageLinks.click(function(e) {
                e.preventDefault();
                $(this).children('img').toggleClass('expanded');
            });
        }
});