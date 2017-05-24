var GnomeItemView = Backbone.Marionette.View.extend({
    tagName: "li",
    className: "gnome",
    editView: false,

    ui: {
        backBtn: ".js-edit-back",
        editContainer: ".js-gnome-edit"
    },

    events: {
        "click": "editGnome",
        "click @ui.backBtn": "closeEdit",
    },

    template: _.template( $("#gnome-item-template").html()),

    editGnome: function() {
        if (!this.editView) {
            this.editView = new GnomeEditView({
                model: this.model
            });
            this.ui.editContainer.append(this.editView.$el);
            this.ui.editContainer.addClass("active");
        }
    },

    closeEdit: function(event) {
        event.stopPropagation();
        this.ui.editContainer.removeClass("active");

        setTimeout( function() {
            this.editView.destroy();
            this.editView = false;
        }.bind(this), 500);
    }
});
