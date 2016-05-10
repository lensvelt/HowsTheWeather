// responsible for displaying the new models added to our collection to the user
var ListView = Backbone.View.extend({

  id: 'list', //same as '#list'. If tagtype not set, defaults to <div>

  //always
  initialize: function() {
    //need the list view to render every time we add a new entry --> use the 'add' data listener:
    //listen tp the collection for the 'add' event & re-render:
    //note: .on() & .listenTo virtually identical; except .on() is for Jquery elements
    this.listenTo(this.collection, 'add', this.render);
    //this.collection.on('add', this.render, this);
  },

  //always
  render: function() {
    //empty the list first before re-rendiering (because render the whole collection);
    this.$el.empty();

    // returning a new entry view wherein the model that it has is the specific model instance from the collection
    this.entries = this.collection.models.map(function(model) {
      return new EntryView({
        model: model
      });
    });

    //get the $el's for each entry view
    var $els = this.entries.map(function(entry) {
      return entry.$el;
    });

    //div with id 'list' -> appends the dom node from each entry above to the list
    this.$el.append($els);

    return this;
  }

});
