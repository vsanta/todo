describe("Task model", function () {
  it("exists", function () {
    expect(Todo.models.Task).toBeDefined();
  });

  describe("validations", function () {
    it("empty description is invalid", function () {
      var model = new Todo.models.Task();

      model.validate({description: ""});

      expect(model.errors[0]).toEqual({field: "description", message: "Description cannot be blank."});
    });

    it("non-blank description is valid", function () {
      var model = new Todo.models.Task();

      model.validate({description: "some description"});

      expect(model.errors).toEqual({});
    });
  });
});
