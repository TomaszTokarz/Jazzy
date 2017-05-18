var GnomesCollectionView = Backbone.Marionette.CompositeView.extend( {
    el: '.js-main-container',
    template: _.template( $('#gnomes-template').html()),
    childViewContainer: '.js-gnomes-list',
    childView:  GnomeItemView,
    collection: gnomesCollection
});
