Rails.application.routes.draw do
  root to: 'app#index'
  get '*path', to: "app#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'

      resources :projects
      resources :tasks
      resources :comments
    end
  end
end
