class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :destination_id
  
end
