class AddIdToDestinations < ActiveRecord::Migration[6.0]
  def change
    add_column :destinations, :feature_id, :integer
  end
end
