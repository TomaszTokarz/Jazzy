var GnomeItemView = Backbone.Marionette.View.extend({
    tagName: 'li',
    className: 'gnome',

    ui: {
        progressBarMain: ".progress-bar--indicator-main",
        progressBarSecondary: ".progress-bar--indicator-secondary"
    },

    template: _.template( $('#gnomes-list-template').html()),

    onRender: function() {
        this.setStrengthBar(this.model.attributes.strenght);
    },

    setStrengthBar: function(primaryAttribute, secondaryAttribute) {
        $(this.ui.progressBarMain).css("width", primaryAttribute + "%" )
        $(this.ui.progressBarSecondary).css("width", secondaryAttribute + "%" )
    }
});
