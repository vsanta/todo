namespace('Todo.views', {
  TaskView : Backbone.View.extend({
    tagName : 'tr',
    className : 'task',

    events : {
      "click" : "editTask"
    },

    initialize: function () {
      this.model.bind('change', this.render, this);     //insta-refresh!
    },

    render : function () {
      var html = JST['templates/task'](this.model.attributes);
      $(this.el).html(html);          //this.el is where events are bound
      return this;
    },

    editTask: function () {
      this.resetEdit();
      this.editTaskView = new Todo.views.EditTaskView({model: this.model});
      $('.edit').html(this.editTaskView.render().el);
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
