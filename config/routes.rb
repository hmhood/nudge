Rails.application.routes.draw do
  root 'homes#index'

  get '/reminders', to: 'homes#index'
  get '/reminders/new', to: 'homes#index'
  get '/medications', to: 'homes#index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :reminders, only: [:index, :create, :destroy]
      resources :medications, only: [:index, :destroy]
    end
  end
end
