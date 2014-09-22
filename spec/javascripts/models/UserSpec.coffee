describe "User", ->
  describe "#tasksCollection", ->
    it "retruns a Tasks collection", ->
      user = new Todo.models.User(
        email: "test@example.com",
        tasks: [
          { id: 1, description: 'test it', complete: false},
          { id: 2, description: 'ship it', complete: true}
        ]
      )

      collection = user.tasksCollection()

      ids = collection.map (task) ->
        task.id

      expect(ids).toMatch([1,2])
