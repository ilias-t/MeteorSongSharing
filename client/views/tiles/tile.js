if(Meteor.isClient) {
  //****** GET ******//
  //Index
  Template.tileList.helpers({
    tiles: function() {
      return Tiles.find({});
    }
  });
  //Delete
  Template.tileItem.events({
    "click #delete-tile": function() {
      Tiles.remove(this._id);
    }
  });
  //Show
  // Template.tilePage.helpers({ currentTile: function() {
  //   return Tiles.findOne(Session.get('currentTileId')); }
  // });
  //****** POST ******//
  //New
  Template.tileNew.events({
    "submit .tile-new": function(e) {
      // This function is called when the new task form is submitted
      var song = e.target.song.value;
      var message = e.target.message.value;
      Tiles.insert({
        song: song,
        message: message,
        createdAt: new Date() // current time
      });
      // Clear form
      e.target.song.value = "";
      e.target.message.value = "";
      // Prevent default form submit
      return false;
    }
  });
}