var LayoutView = Backbone.Marionette.View.extend({

    el: '.js-app-container',
    template: _.template( $('#layout-template').html()),

    initialize: function() {
        this.render();
    },

    onRender: function() {
        this.headerView = new HeaderView();
        this.gnomesCollection = new GnomesCollection({
            fetch: true,
            syncEvent: true,
            layoutView: this
        });

    },

    renderList: function() {
      this.listView = new GnomesCollectionView({
          wholeCollection: this.gnomesCollection
      });
    }
});
