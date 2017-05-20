var LayoutView = Backbone.Marionette.View.extend({

    el: '.js-app-container',
    template: _.template( $('#layout-template').html()),

    ui: {
        scrollTopBtn: ".js-nav-bar"
    },

    events: {
        "click @ui.scrollTopBtn" : "scrollTop"
    },

    initialize: function() {
        this.render();
    },

    onRender: function() {
        this.headerView = new HeaderView();
        this.gnomesCollection = new GnomesCollection({
            fetch: true,
            layoutView: this
        });

    },

    renderList: function() {
        this.listView = new GnomesCollectionView({
            wholeCollection: this.gnomesCollection
        });
    },

    scrollTop: function() {
        $(window).scrollTop(0);
    }
});
