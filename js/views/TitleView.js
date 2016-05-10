var TitleView = Backbone.View.extend({
  //specify target element we are attaching the view to (creates a new <h1> tag/element here)
  el: '<h1>',

  //always
  initialize: function() {
    this.render();
  },

  //always
  render: function() {
    //Basic Jquery
    this.$el.text('How\'s the weather?');
    return this;
  }

});
