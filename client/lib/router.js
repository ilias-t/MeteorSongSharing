// Router.configure({
//   layoutTemplate: 'layout',
//   loadingTemplate: 'loading',
//   waitOn: function() { return Meteor.subscribe('posts'); }
// });

Router.route('/', function() {
  this.render('tilesList');
});

Router.route('/tiles/new', {name: 'tileNew'});