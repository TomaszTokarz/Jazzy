var GnomeItemView = Backbone.Marionette.View.extend({
    tagName: 'li',
    className: 'gnome',
    editView: false,

    ui: {
        progressBarMain: ".progress-bar--indicator-main",
        progressBarSecondary: ".progress-bar--indicator-secondary",
        gnome: ".gnome"
    },

    events: {
        "click" : "editGnome"
    },

    template: _.template( $('#gnome-item-template').html()),

    onRender: function() {
        this.setStrengthBar(this.model.attributes.strenght);
    },

    setStrengthBar: function(primaryAttribute, secondaryAttribute) {
        $(this.ui.progressBarMain).css("width", primaryAttribute + "%" );
        // useless for now. There is no secondary attribute.
        $(this.ui.progressBarSecondary).css("width", secondaryAttribute + "%" );
    },

    editGnome: function() {
        if (!this.editView) {
            this.editView = new GnomeEditView({
                model: this.model,
                el: this.$(".gnome-edit")
            });
        }
    }
});
