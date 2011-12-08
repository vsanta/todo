namespace('Todo.views', {
  EditTaskView: Backbone.View.extend({
    className: 'edit',

    render : function () {
     var html = JST['edit_task'](this.model.attributes);
     $('div.edit').html(html);
     return this;
    }
  })
});
