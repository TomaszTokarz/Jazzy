var GnomeEditView = Backbone.Marionette.View.extend({

    // el: '.gnome-edit',
    template: _.template( $('#gnome-edit-template').html()),

    ui: {
        backBtn : '.js-edit-back',
        saveBtn : '.js-edit-save'
    },

    events: {
        "click @ui.backBtn" : "closeEdit",
        "click @ui.saveBtn" : "saveGnome"
    },

    initialize: function() {
        this.render();
    },

    onRender: function() {
    },

    closeEdit: function() {
        consoile.log("close");
    },

    saveGnome: function() {
        consoile.log("save");
    }
});
