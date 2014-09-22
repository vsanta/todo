namespace('Todo.views', {
  UserView: Backbone.View.extend({
    el: ".create-list",

    template: JST['templates/create_user'],

    events: {
      'submit form': 'createUser'
    },

    initialize: function(){
      _.bindAll(this, "createUserSuccess", "createUserError");
    },

    render: function(){
      this.$el.html( this.template() );
      return this;
    },

    createUser: function(e){
      e.preventDefault();
      var data = {};
      data.email = this.$el.find("#email").val();
      new Todo.models.User().save({user: data}, {success: this.createUserSuccess, error: this.createUserError});
    },

    createUserSuccess: function(model){
      var taskView = new Todo.views.TasksView({collection: model.tasksCollection()});
      taskView.render();
    },

    createUserError: function(){
      this.$el.find('.error').text('Could not create list')
    }
  })
});
