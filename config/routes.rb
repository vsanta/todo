Todo::Application.routes.draw do
  resources :boring_old_rails_tasks

  resources :tasks
  resources :users
  resources :home, :only => [:index]

  root :to => "home#index"
end
