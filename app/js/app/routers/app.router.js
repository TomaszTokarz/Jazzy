var Router = Marionette.AppRouter.extend({
    controller: new Controller(),
    appRoutes: {
        // 'chooseboards/:id': 'chooseBoards',
        '*path': 'home'
    }
});
