(function(i,s,o,g,r,a,m) {
    i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-74908203-1', 'auto');
ga('send', 'pageview');
dataLayer = [];


(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:168748,hjsv:5};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');



try {
    Typekit.load({ async: true });
}
catch(e) {

}

$(function() {

    $('a[href^="#"]').on('click', function(e) {
        var href = $(this).attr('href');
        dataLayer.push({'event':'nav', 'url': href});

        if (href === '#') return;
        var target = $(href);
        if (!target.length) return;

        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, 'swing');
    });

    $('[data-toggle]').on('click', function(e) {
        e.preventDefault();
        $(this).data('toggle').trim().split(' ').forEach(function(sel,i) {
            $(sel).toggleClass('hidden');
        });
    });
});
