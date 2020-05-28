Rails.application.routes.draw do
  get 'study/index'
  get 'database/index'
  root to: 'home#top'
  get 'home/top'
  get 'top' => "home#top"
  get "database/index" => "database#index"
  get "database/math-1" => "database#math-1"
  get "study/index" => "study#index"
  get "study/beginner" => "study#beginner"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
