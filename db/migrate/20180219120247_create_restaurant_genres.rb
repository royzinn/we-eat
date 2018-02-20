class CreateRestaurantGenres < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurant_genres do |t|
      t.references :restaurant, foreign_key: true, index: true
      t.references :genre, foreign_key: true, index: true

      t.timestamps
    end
  end
end
