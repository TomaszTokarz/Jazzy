var HeaderView = Backbone.Marionette.View.extend({

    el: '.js-header-container',
    template: _.template( $('#header-template').html()),

    ui: {
        mobileNavTrigger: '.js-mobile-nav-trigger',
        mobileNav: '.js-mobile-nav'
    },

    events: {
        'click @ui.mobileNavTrigger': 'openMobileNav'
    },

    initialize: function() {
        this.render();
    },

    openMobileNav: function() {
        this.ui.mobileNavTrigger.toggleClass('active');
        this.ui.mobileNav.toggleClass('active');

    }
});
