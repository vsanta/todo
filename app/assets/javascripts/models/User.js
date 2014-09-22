namespace("Todo.models", {
  User: Backbone.Model.extend({
    urlRoot:  "users",

    tasksCollection: function(){
      return new Todo.collections.Tasks(this.get('tasks'));
    }
  })
});
