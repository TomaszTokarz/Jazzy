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
        this.consoleView = new ConsoleView();
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

    infiniteScroll: function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() + $(window).height() == $(document).height() ) {
                app.layout.listView.addItems();
            }
        });
    },

    scrollTop: function() {
        $('body').animate({
            scrollTop: 0
        }, 500);
    },

    consoleLog: function(type, text) {
        consoleCollection.add({
            type: type,
            text: text
        }, {
            at: 0
        })
    }
});
