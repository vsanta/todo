require 'rails_helper'

feature 'Create todo list', js: true do
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

feature 'Edit todo list', js: true do
  scenario 'user marks a task as complete' do
    visit '/'
    fill_in 'new task', with: 'soon to be complete'

    click_on 'add task'

    within '.tasks' do
      expect(page).to have_text 'soon to be complete'
      expect(page).to have_text 'incomplete'
    end

    page.execute_script('$(".task").trigger("click")')
    page.all("tr.task").last.click

    check 'Complete?'

    click_on 'Save Task'

    within '.tasks' do
      expect(page).to have_text 'soon to be complete'
      expect(page).to have_text 'complete'
    end
  end


  scenario 'user edits a task description' do
    visit '/'
    fill_in 'new task', with: 'soon to be different'

    click_on 'add task'

    within '.tasks' do
      expect(page).to have_text 'soon to be different'
      expect(page).to have_text 'incomplete'
    end

    page.execute_script('$(".task").trigger("click")')
    page.all("tr.task").last.click

    fill_in 'Description', with: 'now I am different'

    click_on 'Save Task'

    within '.tasks' do
      expect(page).to have_text 'now I am different'
      expect(page).to have_text 'incomplete'
    end
  end
end
