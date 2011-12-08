describe("Todo.views.EditTaskView", function () {
  beforeEach(function () {
    JST = {edit_task: function() {}};

    this.model = new Backbone.Model({description: "foo"});
    this.view = new Todo.views.EditTaskView({model: this.model});
  });

  it("className is 'edit'", function () {
    expect(this.view.className).toEqual('edit');
  });

  describe("render", function () {
    it("renders the template", function () {
      var templateSpy = sinon.spy(JST, "edit_task");
      el = this.view.render();

      expect(templateSpy).toHaveBeenCalledWith(this.model.attributes);
    });
  });
});
