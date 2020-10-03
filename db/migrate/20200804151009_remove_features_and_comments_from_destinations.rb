class RemoveFeaturesAndCommentsFromDestinations < ActiveRecord::Migration[6.0]
  def change
    remove_column :destinations, :feature_id, :integer
    remove_column :destinations, :comment_id, :integer
  end
end
