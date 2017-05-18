
var app = {
    gnomes: [],
    init: function() {
        app.history = Backbone.history.start();
        app.layout = new LayoutView();
        app.router = new Router();

        app.layout.render();
        app.loadGnomes();
        var gnomesCollectionView = new GnomesCollectionView();
        gnomesCollectionView.render();
    },
    loadGnomes: function() {

        $.getJSON( "/data/gnomes.json", function( data ) {
            for (var i = 0; i <= 30 ; i++) {
                gnomesCollection.add( new Gnome( data[i] ) )
            }
            // $.each(data, function(i, item){
            //     gnomesCollection.add(new Gnome(data[i]))
            // })
        });
    }
};

$(function() {
    app.init();
});
