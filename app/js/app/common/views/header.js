var HeaderView = Backbone.Marionette.View.extend({

    el: '.js-header-container',
    template: _.template( $('#header-template').html()),

    initialize: function() {
        this.render();
    }
});
