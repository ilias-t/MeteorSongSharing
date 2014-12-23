// Router.configure({
//   layoutTemplate: 'layout',
//   loadingTemplate: 'loading',
//   waitOn: function() { return Meteor.subscribe('posts'); }
// });

//Hooks
Router.onBeforeAction(requireLogin);
var requireLogin = function() { if (! Meteor.user()) {
  this.render('landingPage'); } else {
  this.next(); }
}

//Configure
// Router.configure({
//   layoutTemplate: 'layout',
//   loadingTemplate: 'loading',
//   notFoundTemplate: 'notFound',
//   waitOn: function() { return Meteor.subscribe('posts'); }
// });

//Root
Router.route('/', function() {
  this.render('tileList');
});

//Index
Router.route('/tiles', function() {
  this.render('tileList');
});

//New
Router.route('/tiles/new', {name: 'tileNew'});

//Show