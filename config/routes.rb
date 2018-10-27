Rails.application.routes.draw do
  root "home#index"

  resources :greetings, only: :index
end
