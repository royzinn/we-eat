class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :city
      t.string :country
      t.string :country_code
      t.string :zip_code
      t.float :latitude
      t.float :longitude
      t.references :addressable, polymorphic: true

      t.timestamps
    end
  end
end
