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
  get "study/beginner/111" => "study#111"
  get "study/beginner/121" => "study#121"
  get "study/beginner/122" => "study#122"
  get "study/beginner/131" => "study#131"
  get "study/beginner/132" => "study#132"
  get "study/beginner/133" => "study#133"
  get "study/beginner/134" => "study#134"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
