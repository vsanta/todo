namespace('Todo.views', {
  EditTaskView: Backbone.View.extend({

    events: {
      "change :input" : "updateModel",
      "submit form#edit-task" : "saveModel"
    },

    initialize: function () {
      _.bindAll(this, "remove");
    },

    render: function () {
     var html = JST['edit_task'](this.model.attributes);
     $(this.el).html(html);
     return this;
    },

    updateModel: function (event) {
      var name = $(event.currentTarget).attr("name");
      var value = $(event.currentTarget).attr("value");
      var attrs = {}
      attrs[name] = value;

      this.model.set(attrs, { silent: true });
    },

    saveModel: function (event) {
      event.preventDefault();
      event.stopPropagation();

      this.model.save(this.model.attributes, {success: this.remove});
    },

    remove: function () {
      $(this.el).remove();
    }
  })
});
