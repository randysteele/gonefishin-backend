class ApplicationController < ActionController::Base
  #  protect_from_forgery with: :exception
  has_one_attached :photo

end
