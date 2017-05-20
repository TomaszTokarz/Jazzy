var GnomesCollectionView = Backbone.Marionette.CompositeView.extend( {
    el: '.js-main-container',
    template: _.template( $('#gnomes-template').html()),
    childViewContainer: '.js-gnomes-list',
    childView: GnomeItemView,
    index: 0,
    itemsPerPage: 20,
    allModels: [],

    initialize: function(options) {
        this.collection = new GnomesCollection();
        this.allModels = this.options.wholeCollection.models;
        this.addItems();
        this.render();
        this.collection.on('change',this.render,this);
        app.infiniteScroll();
    },

    addItems: function() {
        for (var i = this.index; i < this.index + this.itemsPerPage; i++) {
            this.collection.add(this.allModels[i]);
        }

        if (this.index >= this.index + this.allModels.length) {
            this.index = this.allModels.length;
        } else {
            this.index = this.index + this.itemsPerPage;
        }
    }
});
