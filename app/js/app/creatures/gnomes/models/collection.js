var GnomesCollection = Backbone.Collection.extend({
    model: Gnome,
    url: 'http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?_format=json',

    initialize: function(options) {
        if (options && options.fetch) {
            this.fetch({
                success: function() {
                    options.layoutView.renderList();
                }.bind(this)
            });
        }
    }
});
