class Destination < ApplicationRecord
    has_many :features
    has_many :comments
    # has_many :trips 
    
end
