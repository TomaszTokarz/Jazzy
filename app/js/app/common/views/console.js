var ConsoleView = Backbone.Marionette.CollectionView.extend({

    el: '.js-console-container',
    collection: consoleCollection,
    childView: ConsoleItemView,
    template: _.template( $('#console-template').html()),

    initialize: function() {
        this.render();
    }
});
