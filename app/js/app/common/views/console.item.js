var ConsoleItemView = Backbone.Marionette.View.extend({
    tagName: "li",
    className: "console--list-item",
    template: _.template( $("#console-item-template").html()),

    initialize: function() {
        setTimeout(function() {
            $(this.el).addClass("fade");

            setTimeout(function() {
                consoleCollection.remove(this.model)
            }.bind(this), 1000);
        }.bind(this), 3000);

    }
});
