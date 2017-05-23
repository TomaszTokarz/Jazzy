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
    },

    saveGnome: function() {
        if (this.checkValidation()) {
            // this.model.save({
            //     name: this.ui.name.val(),
            //     age: this.ui.age.val(),
            //     strenght: this.ui.strenght.val()
            // }, {patch:true});
            // $.ajax({
            //     dataType: 'application/json',
            //     processData: false,
            //     url : "http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes/" + this.model.id,
            //     type : 'PATCH',
            //     data: {
            //          name: this.ui.name.val(),
            //          age: this.ui.age.val(),
            //          strenght: this.ui.strenght.val()
            //     }
            // });
            $.ajax({
                headers : {
                    "Accept" : "application/json",
                    "Content-Type" : "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
               },
                url : "http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes/"+ this.model.id,
                type : "PATCH",
                crossDomain: true,
                body: JSON.stringify({
                      name: this.ui.name.val(),
                      age: this.ui.age.val(),
                      strenght: this.ui.strenght.val()
                 }),
                success : function(response, textStatus, jqXhr) {
                    console.log("success");
                },
                error : function(jqXHR, textStatus, errorThrown) {
                    console.log("error");
                },
                complete : function() {
                    console.log("Venue Patch Ran");
                }
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
