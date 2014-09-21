namespace('Todo.views', {
  TasksView : Backbone.View.extend({
    tagName: 'div',
    className: 'task-list',
    events: {
      'click #add-task' : 'createOnEnter',
      'focus #new-task' : 'clearEdit'
    },

    initialize : function (options) {
      this.editContainer = options.editContainer;
      this.container = options.container;
      this.collection.bind("add", this.addTask, this);
      _.bindAll(this, "addTask");
    },

    render : function () {
      this.collection.each(this.addTask);
      return this;
    },

    addTask: function (task) {
      var view = new Todo.views.TaskView({ model: task, editContainer: this.editContainer });
      var taskEl = view.render().el;
      this.container.prepend(taskEl);
    },

    createOnEnter : function () {
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
