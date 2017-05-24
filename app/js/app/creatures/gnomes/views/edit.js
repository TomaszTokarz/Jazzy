var GnomeEditView = Backbone.Marionette.View.extend({

    template: _.template( $('#gnome-edit-template').html()),
    className: '.gnome-edit',

    ui: {
        name: ".js-edit-name",
        age: ".js-edit-age",
        strenght: ".js-edit-strenght",
        saveBtn: ".js-edit-save",
        inputs: ".js-input"
    },

    events: {
        "click @ui.saveBtn": "saveGnome",
        "keyup @ui.inputs": "checkValidation"
    },

    initialize: function() {
        this.render();
        this.console = app.layout.consoleView.collection;
    },

    saveGnome: function() {
        if (this.checkValidation()) {
            this.model.save({
                name: this.ui.name.val(),
                age: this.ui.age.val(),
                strenght: this.ui.strenght.val()
            }, {
                patch:true,
                success: function() {
                    app.layout.consoleLog("success", "Gnome updated successfully");
                },
                error: function() {
                    app.layout.consoleLog("fail", "Gnome update fail");
                }.bind(this)
            });
        }
    },

    checkValidation: function() {
        var isValid = true;
        if (this.ui.name.val().length > 20 || !this.ui.name.val()) {
            this.ui.name.addClass("wrong");
            isValid = false;
        } else {
            this.ui.name.removeClass("wrong");
        };

        if (this.ui.age.val() / 100 >= 0 && this.ui.age.val() / 100 <= 1 && this.ui.age.val()) {
            this.ui.age.removeClass("wrong");
        } else {
            this.ui.age.addClass("wrong");
            isValid = false;
        };

        if (this.ui.strenght.val() / 100 >= 0 && this.ui.strenght.val() / 100 <= 1 && this.ui.strenght.val()) {
            this.ui.strenght.removeClass("wrong");
        } else {
            this.ui.strenght.addClass("wrong");
            isValid = false;
        };

        if (isValid) {
            return true;
        } else {
            return false;
        }
    }
});
