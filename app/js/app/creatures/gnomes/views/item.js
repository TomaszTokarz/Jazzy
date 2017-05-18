var GnomeItemView = Backbone.Marionette.View.extend({
    tagName: 'li',
    className: 'gnome',

    template: _.template( $('#gnomes-list-template').html()),

    ui: {
        // editBtn: '.js-edit-sticker',
        // deleteBtn: '.js-delete-sticker',
        // addToBoardBtn: '.js-add-to-board'
    },

    events: {
        // 'click @ui.editBtn': 'editSticker',
        // 'click @ui.deleteBtn': 'deleteSticker',
        // 'click @ui.addToBoardBtn': 'chooseBoards'
    }
});
