class AddDestinationsToFeature < ActiveRecord::Migration[6.0]
  def change
    add_column :features, :destination_id, :integer
  end
end
