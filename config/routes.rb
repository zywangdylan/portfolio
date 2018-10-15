Rails.application.routes.draw do
  get 'about', to: 'pages#about', as: :about
  get 'contact', to: 'pages#contact', as: :contact
  get 'home', to: 'pages#home', as: :home
  get 'projects', to: 'pages#projects', as: :projects
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
