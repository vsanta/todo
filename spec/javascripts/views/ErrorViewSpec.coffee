describe 'ErrorView', ->

  describe "#render", ->
    it "renders the error message", ->
      message = "some error"

      view = new Todo.views.ErrorView(message: message)

      view.render()

      expect(view.$el.find('.alert-message').text()).toMatch(message)
