Tiles = new Mongo.Collection("tiles");

if (Meteor.isClient) {
  
  //Helpers
  Template.allTiles.helpers({
    tiles: function() {
      return Tiles.find({});
    }
  });

  //Events
  Template.body.events({
    "submit .new-tile": function (event) {
      // This function is called when the new task form is submitted
      var song = event.target.song.value;
      var message = event.target.message.value;
      Tiles.insert({
        song: song,
        message: message,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.song.value = "";
      event.target.message.value = "";

      // Prevent default form submit
      return false;
    }
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
