require 'rails_helper'

feature 'Create a todo list', js: true do
  scenario 'user creates a list and adds task' do
    visit '/'

    fill_in 'email', with: 'test@example.com'
    click_on 'create list'

    expect(page).to have_content 'Todo List'
    expect(page).to_not have_selector '.task'
  end
end
