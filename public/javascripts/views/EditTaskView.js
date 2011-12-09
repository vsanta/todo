namespace('Todo.views', {
  EditTaskView: Backbone.View.extend({

    events: {
      "change :input" : "updateModel",
      "submit form#edit-task" : "saveModel"
    },

    initialize: function () {
      _.bindAll(this, "remove");
      _.bindAll(this, "displayErrors");
    },

    render: function () {
     var html = JST['edit_task'](this.model.attributes);
     $(this.el).html(html);
     return this;
    },

    updateModel: function (event) {
      // Hmm, this method could use some refactoring...
      var target = $(event.currentTarget);
      var name = target.attr("name");
      var value = null;

      if (target.attr("type") === "checkbox") {
        if (target.is(":checked")) {
          value = true;
        } else {
          value = false;
        }
      } else {
        value = target.attr("value");
      }

      var attrs = {}
      attrs[name] = value;
      this.model.set(attrs, { silent: true });
    },

    saveModel: function (event) {
      event.preventDefault();
      event.stopPropagation();

      this.model.save(this.model.attributes, {success: this.remove, error: this.displayErrors});
    },

    remove: function () {
      $(this.el).remove();
    },

    displayErrors: function (model, response) {
      _.each(model.errors, function (error) {
       $('div.errors').append('<div class="alert-message">' + error.message + '</div>');
      });
    }
  })
});
