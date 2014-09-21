namespace("Todo.models", {
  Task: Backbone.Model.extend({
    validate: function (attributes) {
      this.errors = [];
      if (attributes.description == "") {
        this.errors.push({field: "description", message: "Description cannot be blank."});
        return this.errors;
      }
    }
  })
});
