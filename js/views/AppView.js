var AppView = Backbone.View.extend({
  //specify target element we are attaching the view to:
  el: '#app', //passed to Jquery later to give us $el 

  initialize: function() {
  //USEFUL FOR:
  //set data listeners
  //run first render()
  

  //set up child views
    this.title = new TitleView();
    this.input = new InputView({
      collection: this.collection //passing a global reference to the AppView's collection to the input view
    });

    this.list = new ListView({
      collection: this.collection
    });

    this.render();
  },


  //
  render: function() {

    this.$el.append([
      //append child elements
      this.title.$el,
      this.input.$el,
      this.list.$el
    ]);

    return this;
  }

});
