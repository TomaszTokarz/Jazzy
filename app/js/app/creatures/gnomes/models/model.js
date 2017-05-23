var Gnome = Backbone.Model.extend({
    url: function() {
      return "http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes/:id?_format=json".replace(":id", this.get('id'))
    },

    defaults: {
        "id": "",
        "name": "Gnome",
        "age": "",
        "strenght": ""
    }
});
