var GnomeItemView = Backbone.Marionette.View.extend({
    tagName: "li",
    className: "gnome",
    editView: false,

    ui: {
        progressBarMain: ".progress-bar--indicator-main",
        progressBarSecondary: ".progress-bar--indicator-secondary",
        editField: ".gnome-edit--container",
        backBtn : ".js-edit-back",
        saveBtn : ".js-edit-save",
        name : ".js-edit-name",
        age : ".js-edit-age",
        strenght : ".js-edit-strenght"
    },

    events: {
        "click" : "editGnome",
        "click @ui.backBtn" : "closeEdit",
        "click @ui.saveBtn" : "saveGnome"
    },

    template: _.template( $("#gnome-item-template").html()),

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
            this.$(".gnome-edit").addClass("active")
        }
    },

    closeEdit: function(event) {
        event.stopPropagation();
        this.$(".gnome-edit").removeClass("active");
        setTimeout( function() {
            this.editView.$el.html("");
            this.editView = false;
        }.bind(this), 1000);
    },

    saveGnome: function() {
        console.log("save");
        this.editView.getData();
        if(data) {
            this.sendData(data);
        };
    },

    sendData: function(data) {
        $.ajax({
            url: "http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes/"+this.model.id,
            type: "POST",
            data: data,
            dataType: 'application/json', // lowercase is always preferered though jQuery does it, too.
            success: function(response) {
                console.log("sucess", response)
            },
            error: function(response) {
                console.error(response)
            }
        });
    }
});
