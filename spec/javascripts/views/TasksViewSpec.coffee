describe "TasksViewSpec", ->

  describe "#initialize", ->
    it "listens to additions on the collection and triggers add", ->
      task = new Todo.models.Task
        description: 'test'
        complete: false

      tasks = new Todo.collections.Tasks ([task])

#      bindSpy = spyOn Todo.collections.Tasks.prototype, 'bind'

      bindAllSpy = spyOn _, 'bindAll'

      view = new Todo.views.TasksView collection: tasks

#      expect(bindSpy).toHaveBeenCalledWith('add', view.addTask, view)
      expect(bindAllSpy).toHaveBeenCalledWith(view, "addTask")

  describe "#addTask", ->
    it "initializes and renders tasks", ->
      editContainer = ""
      container = $('<div class="tasks-container"></div>')
      setFixtures container
      task = new Todo.models.Task
        description: 'test'
        complete: false

      tasks = new Todo.collections.Tasks ([task])

      view = new Todo.views.TasksView collection: tasks , editContainer: editContainer, container: container

      taskViewInit = spyOn Todo.views.TaskView.prototype, 'initialize'
      taskViewRender = spyOn(Todo.views.TaskView.prototype, 'render').and.callFake ->
        el: '<div></div>'

      view.addTask( task )
      expect(taskViewInit).toHaveBeenCalledWith(model: task, editContainer: editContainer)
      expect(taskViewRender).toHaveBeenCalled()
      expect($('.tasks-container').html()).toEqual('<div></div>')
