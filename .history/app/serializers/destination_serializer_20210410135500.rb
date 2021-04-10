class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :description, :image
  has_many :features 
  has_many :comments

  def image
    if object.image.attached?
      {
        url: rails_blob_url(object.image)
      }
    end
  end
end
