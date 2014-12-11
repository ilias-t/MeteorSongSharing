Meteor.Router.add({
  '/': 'postIndex',
  '/tiles/:_id': {
    to: 'tileShow',
    and: function(id) { Session.set('currentTileId', id)}
  },
  '/tiles/new': 'tileNew'
});