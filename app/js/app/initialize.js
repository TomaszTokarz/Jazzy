var app = {
    gnomes: [],
    init: function() {
        app.layout = new LayoutView();
    },
    infiniteScroll: function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() + $(window).height() == $(document).height() ) {
                app.layout.listView.addItems();
            }
        });
    }
};

$(function() {
    app.init();
});
