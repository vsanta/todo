describe "TasksView", ->
  beforeEach ->

  describe "#initialize", ->
    it "listens to changes on the model and triggers render", ->
      task = new Todo.models.Task
      listenSpy = spyOn Todo.views.TaskView.prototype, 'listenTo'

      view = new Todo.views.TaskView model: task

      expect(listenSpy).toHaveBeenCalledWith( task, 'sync', view.render)




