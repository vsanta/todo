describe 'EditTaskView', ->

  describe '#displayErrors', ->
    it 'renders error messages on the page', ->
      setFixtures '<div class="errors"></div>'

      view = new Todo.views.EditTaskView()

      view.displayErrors({errors: [{message: "some error"}]}, {})

      expect($('.errors').text()).toMatch("some error")
