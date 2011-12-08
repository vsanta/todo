Todo::Application.routes.draw do
  resources :tasks
  resources :home, :only => [:index]

  root :to => "home#index"
end
