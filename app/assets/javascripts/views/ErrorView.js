namespace('Todo.views', {
  ErrorView: Backbone.View.extend({
    template: JST['templates/errors'],

    initialize: function(options){
      this.messages = options.messages;
    },

    render: function(){
      this.$el.html(this.template({message:message}));
      return this;
    }
  })
});
