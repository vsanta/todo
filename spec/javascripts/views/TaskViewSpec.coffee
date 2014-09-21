describe "TasksView", ->
  beforeEach ->

  describe "#initialize", ->
    it "listens to changes on the model and triggers render", ->
      task = new Todo.models.Task
      listenSpy = spyOn Todo.views.TaskView.prototype, 'listenTo'

      view = new Todo.views.TaskView model: task

      expect(listenSpy).toHaveBeenCalledWith( task, 'sync', view.render)

  describe "editTask", ->
    describe "event binding", ->
      it "is triggered on $el.click", ->
        task = new Todo.models.Task
          description: "Test task"
          complete: false

        editViewSpy = spyOn Todo.views.TaskView.prototype, 'editTask'

        view = new Todo.views.TaskView model: task

        setFixtures view.render().$el

        view.render().$el.click()

        expect(editViewSpy).toHaveBeenCalled()



