class AddIndexesToRestaurant < ActiveRecord::Migration[5.1]
  def change
    add_index :restaurants, :name, unique: true
  end
end
