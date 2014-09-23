namespace('Todo.views', {
  ErrorView: Backbone.View.extend({
    template: JST['templates/errors'],

    initialize: function(options){
      this.message = options.message;
    },

    render: function(){
      this.$el.html(this.template({message: this.message}));
      return this;
    }
  })
});
