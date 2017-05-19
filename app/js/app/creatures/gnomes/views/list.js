var GnomesCollectionView = Backbone.Marionette.CompositeView.extend( {
    el: '.js-main-container',
    template: _.template( $('#gnomes-template').html()),
    childViewContainer: '.js-gnomes-list',
    childView: GnomeItemView,
    currentIndex: 0,
    itemsPerPage: 30,

    initialize: function(options) {
        this.collection = new GnomesCollection();
        this.addItems();
        this.render();
    },

    addItems: function() {
        for (var i = this.currentIndex; i < this.currentIndex + this.itemsPerPage; i++) {

            this.collection.add(this.options.wholeCollection.models[i]);
        }
        this.currentIndex = this.currentIndex + this.itemsPerPage;

        // adding more elements from console
        // app.layout.listView.addItems()
    }
});
