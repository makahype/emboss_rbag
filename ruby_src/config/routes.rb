Rails.application.routes.draw do  
  resources :notes
  root 'home#index'

  resources :users
  resources :sessions, only: [:new, :create, :destroy]


  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  get  'static_pages/home'
  get  'static_pages/notelist_test'
  get  'endpoints/user_new'
  get  'endpoints/user_notes'
end