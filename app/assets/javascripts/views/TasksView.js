namespace('Todo.views', {
  TasksView : Backbone.View.extend({
    tagName: 'div',
    className: 'task-list',
    events: {
      'click #add-task' : 'createOnEnter',
      'focus #new-task' : 'clearEdit'
    },

    initialize : function () {
      view = this;
      this.collection.bind("add", this.addTask, this);
      _.bindAll(this, "addTask");
    },

    render : function () {
      this.collection.each(this.addTask);
      return this;
    },

    addTask: function (task) {
      var view = new Todo.views.TaskView({ model: task});
      var taskEl = view.render().el;
      $('.tasks').prepend(taskEl);
    },

    createOnEnter : function (event) {
      var inputValue = this.$el.find("#new-task").val();

      this.collection.create({ description: inputValue, complete: false });
      this.clearInput();
    },

    clearInput : function () {
      $('#new-task').attr("value", '');
    },

    clearEdit: function () {
      $('.edit').html('');
    }

  })
});
