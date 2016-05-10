var EntryView = Backbone.View.extend({
  //set a classname for css styling
  className: 'entry',
  //use underscore template function
  template: _.template('<p>It is currently <%= weather %><%= unit %> in <%= city %>.</p>'),

  events: {
    'click': 'clickAction'
  },
  //always
  initialize: function() {

    this.listenTo(this.model, 'change', this.render);
    this.render();

  },
  //always
  render: function() {
    //pass an object to the underscore template function and will return the populated template string
    var entry = this.template({
      weather: this.model.get('weather'),
      unit: this.model.get('unit'),
      city: this.model.get('city')
    });

    this.$el.html(entry);

  },

  clickAction: function() {

    this.model.toggleUnit();

  }

});
