class Destination < ApplicationRecord
    has_many :features
    has_many :comments
    has_one_attached :image
    
end
