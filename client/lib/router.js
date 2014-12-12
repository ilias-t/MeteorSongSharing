// Router.configure({
//   layoutTemplate: 'layout',
//   loadingTemplate: 'loading',
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