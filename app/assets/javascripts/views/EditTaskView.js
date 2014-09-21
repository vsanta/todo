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
     var html = JST['templates/edit_task'](this.model.attributes);
     $(this.el).html(html);
     return this;
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
    },

    updateModel: function (event) {
      var target = $(event.currentTarget);
      var attrs = this.changedAttribute(target);
      console.log("im in ur console, loggin ur attributes");
      console.log(attrs);
      this.model.set(attrs, { silent: true });
    },

    changedAttribute: function (target) {
      // Hmm, this method could use some refactoring...
      var name = target.attr("name");
      var value = null;
      var attrs = {};

      if (target.attr("type") === "checkbox") {
        if (target.is(":checked")) {
          value = true;
        } else {
          value = false;
        }
      } else {
        value = target.attr("value");
      }

      attrs[name] = value;
      return attrs;
    }
  })
});
