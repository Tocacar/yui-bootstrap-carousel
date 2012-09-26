YUI.add("twitter-carousel", function (Y) {
    Y.log('twitter-carousel is loaded', 'info');

    var Clazz = Y.namespace("Twitter").Carousel = Y.Base.create("twitter-carousel", Y.Base, [], {

        initializer: function (config) {
            Y.log(Clazz.NAME + "::initializer");

            this._scrollView = new Y.ScrollView({
                id: 'scrollview',
                srcNode: '.carousel-inner',
            });

            this._scrollView.render();

            this._scrollView.plug(Y.Plugin.ScrollViewPaginator, {
                selector: 'div'
            });

            this._width = this._scrollView.get('contentBox').one('img').get('clientWidth');

            this._scrollView.get('boundingBox').ancestor().setStyle('width', this._width);
            this._scrollView.get('boundingBox').setStyle('width', this._width);

            Y.one('.right').set('id', 'scrollview-next');
            Y.one('.left').set('id', 'scrollview-left');
            
            Y.one('#scrollview-next').on('click', Y.bind(
				this._scrollView.pages.next,
				this._scrollView.pages
            ));

            Y.one('#scrollview-left').on('click', Y.bind(
				this._scrollView.pages.prev,
				this._scrollView.pages
            ));
        },
    },
    {
        ATTRS: {}
    });
}, "1.0", {
    requires: ["scrollview", "scrollview-paginator", "base-build"]
});