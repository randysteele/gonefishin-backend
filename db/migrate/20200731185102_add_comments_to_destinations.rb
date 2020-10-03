class AddCommentsToDestinations < ActiveRecord::Migration[6.0]
  def change
    add_column :destinations, :comment_id, :integer

  end
end
