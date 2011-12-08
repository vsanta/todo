namespace('Todo.views', {
  TaskView : Backbone.View.extend({
    tagName : 'tr',
    className : 'task',

    events : {
      "click.task" : "editTask"
    },

    initialize: function () {
      this.model.bind('change', this.render, this);
    },

    render : function () {
      var html = JST['task']({description: this.model.get("description")});
      $(this.el).html(html);
      return this;
    },

    editTask: function () {
      this.resetEdit();
      this.editTaskView = new Todo.views.EditTaskView({model: this.model});
      $('.edit').html(this.editTaskView.render().el);
    },

    resetEdit: function () {
      $('div.edit').html('');
      if (this.editTaskView !== undefined) {
        this.editTaskView.unbind();
      }
    }
  })
});
