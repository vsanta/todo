require 'rails_helper'

feature 'Todo list', js: true do
  scenario 'user adds an item to the list' do
    visit '/'
    fill_in 'new task', with: 'add some test coverage'

    click_on 'add task'

    within '.tasks' do
      expect(page).to have_text 'add some test coverage'
      expect(page).to have_text 'incomplete'
    end
  end
end
