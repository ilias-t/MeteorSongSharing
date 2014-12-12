Template.tilePage.helpers({ currentTile: function() {
  return Posts.findOne(Session.get('currentPostId')); }
});