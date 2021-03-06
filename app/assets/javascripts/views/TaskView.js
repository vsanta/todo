namespace('Todo.views', {
  TaskView : Backbone.View.extend({
    tagName : 'tr',
    className : 'task',

    events : {
      "click" : "editTask"
    },

    initialize: function (options) {
      this.editContainer = options.editContainer;
      this.listenTo(this.model, 'sync', this.render);
    },

    render : function () {
      var html = JST['templates/task'](this.model.attributes);
      $(this.el).html(html);          //this.el is where events are bound
      return this;
    },

    editTask: function () {
      this.resetEdit();
      this.editTaskView = new Todo.views.EditTaskView({model: this.model});
      this.editContainer.html(this.editTaskView.render().el);
    },

    resetEdit: function () {
      // prevent any weirdness with rogue bindings
      $('div.edit').html('');
      if (this.editTaskView !== undefined) {
        this.editTaskView.unbind();
      }
    }
  })
});
