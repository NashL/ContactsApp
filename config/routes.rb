Rails.application.routes.draw do
  root 'welcome#index'

  get 'welcome/index'

  get 'contacts/archived' => 'contacts#archived'

  resources :contacts

  post "/archive/:id" => "contacts#archive", :as => :archive_contact

  namespace :v1 do
    resources :contacts
  end

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
