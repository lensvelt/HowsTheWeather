//Responsible for adding new modesl to our collection
var InputView = Backbone.View.extend({

  // these two lines do the same thing
  tagName: 'input',
  // el: '<input>',

  //this is how we capture user events
  events: {
    'keydown': 'keyAction',
  },

  //always
  initialize: function() {
    this.render(); //initial render()
  },

  //always
  render: function() {

    this.resetInput();
    return this;
  },

  //callback executed on specified event (see above):
  keyAction: function(e) {
    //check which key pressed
    var isEnterKey = (e.which === 13);

    if(isEnterKey && !this.$el.val().trim().match(/^(?=.*[0-9].*)[0-9]{5}$/)) {

      this.$el.attr({
        placeholder: 'Sorry, zip code invalid.'
      });
      this.clearInput();

    } else if(isEnterKey) {

      //Add new entry to collection using the user input zip code
      this.collection.addWeatherEntry(this.$el.val());
      // clear the input box text
      this.resetInput();

    }

  },

  resetInput: function() {
    //Placeholder text on input box
    this.$el.attr({
      placeholder: 'Enter a zip code'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }

});
