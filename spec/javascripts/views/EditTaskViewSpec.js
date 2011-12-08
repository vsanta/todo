describe("Todo.views.EditTaskView", function () {
  beforeEach(function () {
    JST = {edit_task: function() {}};

    this.model = new Backbone.Model({description: "foo"});
    this.saveStub = sinon.stub(this.model, "save");

    this.view = new Todo.views.EditTaskView({model: this.model});
  });

  afterEach(function () {
    this.saveStub.restore();
  });

  describe("render", function () {
    it("renders the template", function () {
      var templateSpy = sinon.spy(JST, "edit_task");
      el = this.view.render();

      expect(templateSpy).toHaveBeenCalledWith(this.model.attributes);
    });
  });

  describe("events", function () {
    it("'change :input' triggers 'updateModel'", function () {
      expect(this.view.events['change :input']).toEqual('updateModel');
    });

    it("'submit form#edit-task' triggers 'saveModel'", function () {
      expect(this.view.events['submit form#edit-task']).toEqual('saveModel');
    });
  });

  describe("updateModel", function () {
    it("sets model attribute based on event value", function () {
      var mockEvent = {
        currentTarget: {
          name : "notes",
          value: "some notes"
        }
      };

      this.view.updateModel(mockEvent);

      expect(this.view.model.get("notes")).toEqual("some notes");
    });
  });

  describe("saveModel", function () {
    beforeEach(function () {
      this.event = jQuery.Event();
      this.preventDefaultSpy = sinon.spy(this.event, "preventDefault");
      this.stopPropagationSpy = sinon.spy(this.event, "stopPropagation");
    });

    afterEach(function () {
      this.event.preventDefault.restore();
      this.event.stopPropagation.restore();
    });

    it("prevents event defaults and propagation", function() {
      this.view.saveModel(this.event);

      expect(this.preventDefaultSpy).toHaveBeenCalled();
      expect(this.stopPropagationSpy).toHaveBeenCalled();
    });

    it("calls save on the model", function () {
      this.view.saveModel(this.event);

      expect(this.saveStub).toHaveBeenCalled();
    });
  });
});
