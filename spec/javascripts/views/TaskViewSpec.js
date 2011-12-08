describe("TaskView", function () {
  beforeEach(function () {
    JST = {task: function() {}};
    var model = new Backbone.Model({description: "do this thing"});

    this.view = new Todo.views.TaskView({model: model});
  });

  it("tagName is 'tr'", function () {
    expect(this.view.tagName).toEqual('tr');
  });

  it("className is 'task'", function () {
    expect(this.view.className).toEqual('task');
  });

  it("renders the template", function () {
    var templateSpy = sinon.spy(JST, "task");
    el = this.view.render();

    expect(templateSpy).toHaveBeenCalled();
  });

  describe("events", function () {
    it("binds 'click .task' to 'editTask'", function () {
     expect(this.view.events['click.task']).toEqual('editTask');
    });
  });

  describe("editTask", function () {
    beforeEach(function () {
      this.editTaskView = new Todo.views.EditTaskView();
      this.editStub = sinon.stub(Todo.views, "EditTaskView").returns(this.editTaskView);
      this.renderStub = sinon.stub(this.editTaskView, "render");
    });

    afterEach(function () {
      this.editStub.restore();
      this.renderStub.restore();
    });

    it("instantiates an EditTaskView", function () {
      this.view.editTask();

      expect(this.editStub).toHaveBeenCalledWith({model: this.view.model});
      expect(this.view.editTaskView).toEqual(this.editTaskView);
    });

    it("renders the editTaskView", function () {
      this.view.editTask();

      expect(this.editTaskView.render).toHaveBeenCalled();
    });

    it("unbinds events from editTaskView if it exists", function () {
      var unbindStub = sinon.stub(this.editTaskView, "unbind");

      this.view.editTaskView = this.editTaskView;

      this.view.editTask();

      expect(unbindStub).toHaveBeenCalled();
    });

    it("clears edit element", function () {
      setFixtures("<div class='edit'>some content></div>");

      this.view.editTask();

      expect($('div.edit').html()).toEqual('');
    });
  });
});
