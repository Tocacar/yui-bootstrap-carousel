YUI({
   modules: {
			'twitter-carousel': {
				fullpath: "http://localhost/carousel/js/module_carousel.js",
				requires: ["scrollview", "scrollview-paginator", "base-build"]
			}			    
        }
}).use( 'twitter-carousel',  function(Y) {

var scrollView = new Y.Twitter.Carousel();

});