class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false, default: ''
      t.boolean :accepts_10bis, default: false
      t.integer :max_delivery_time
      t.string :slug

      t.timestamps
    end
  end
end
