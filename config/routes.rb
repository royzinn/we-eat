Rails.application.routes.draw do
  root 'home#index'

  resources :restaurants, only: [:index, :show]
  resources :genres, only: [:index]
end
