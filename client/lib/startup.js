if (Meteor.isClient) {
  
  //Helpers
  Template.body.helpers({
    tiles: function() {
      return Tiles.find({});
    }
  });

  //Events
  Template.body.events({
    "submit .new-tile": function (e) {
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
  Template.tileNew.events({
    "click #submit": function(e) {
      Tiles.remove(this._id);
      // console.log("test");
    }
  });

}
