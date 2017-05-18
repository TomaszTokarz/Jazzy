var LayoutView = Backbone.Marionette.View.extend({

    el: '.js-header-container',
    template: _.template( $('#header-template').html()),
    ui: {
        // newStickerBtn: '.js-add-sticker-btn',
        // changeBoardBtn: '.js-change-board-btn',
        // homeBtn: '.js-main-page-btn',
        // searchBar: '.js-search-bar'
    },

    events: {
        // 'click @ui.newStickerBtn': 'newStickerView',
        // 'click @ui.changeBoardBtn': 'boardsListView',
        // 'click @ui.homeBtn': 'renderHome',
        // 'keyup @ui.searchBar': 'search'
    },

    initialize: function() {
        // app.popupView = new PopupView();
        console.log("Layout View initialized")
    },

    boardsListView: function() {
        Backbone.history.navigate('/boards', {trigger: true});
    }
});
