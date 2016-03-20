(function(i,s,o,g,r,a,m) {
    i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-74908203-1', 'auto');
ga('send', 'pageview');


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

document.addEventListener('DOMContentLoaded', function() {

    var toggle = document.querySelectorAll('[data-toggle]');
    for (var i = 0; i < toggle.length; i++) {
        toggle.item(i).onclick = function(e) {
            var toggleItem = document.querySelector(this.dataset.toggle.trim());
            if (toggleItem.classList.contains('hidden')) {
                toggleItem.classList.remove('hidden');
            } else {
                toggleItem.classList.add('hidden');
            }
        };
    }
}, false);

