describe 'UserView', ->
  beforeEach ->
    setFixtures $('<div class="create-list"></div>')

  describe 'event binding', ->
    it 'calls creates a user on form submit', ->
      createUserSpy = spyOn(Todo.views.UserView.prototype, 'createUser').and.callFake (e) ->
        e.preventDefault()

      view = new Todo.views.UserView()

      setFixtures view.render().$el

      view.$el.find('form').submit()
      expect(createUserSpy).toHaveBeenCalled()


  describe "#createUser", ->
    it "saves the user", ->
      view = new Todo.views.UserView()
      userSaveSpy = spyOn Todo.models.User.prototype, 'save'

      setFixtures view.render().$el

      view.$el.find("#email").val("example@example.com")

      view.createUser( $.Event() )

      expect(userSaveSpy).toHaveBeenCalledWith(
        { email: "example@example.com" },
        {
          success: Todo.views.UserView.prototype.createUserSuccess,
          error: Todo.views.UserView.prototype.createUserError,
        }
      )

    describe '#createUserSuccess', ->
      it 'renders the user list', ->
        view = new Todo.views.UserView()
        user = new Todo.models.User({email: "example@example.com", tasks: [{desciption: 'test', complete: false}]})
        todoViewInitSpy = spyOn Todo.views.TasksView.prototype, 'initialize'
        todoViewRenderSpy = spyOn Todo.views.TasksView.prototype, 'render'

        view.createUserSuccess(user)

        expect(todoViewInitSpy).toHaveBeenCalledWith(collection: jasmine.any(Todo.collections.Tasks))
        expect(todoViewRenderSpy).toHaveBeenCalled()

    describe '#createUserError', ->
      it 'displays an error message', ->
        view = new Todo.views.UserView()
        view.render()
        view.createUserError({})

        expect(view.$el.text()).toMatch("Could not create list")


