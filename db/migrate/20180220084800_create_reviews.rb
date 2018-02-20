class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :comment
      t.string :reviewer_name
      t.references :reviewable, polymorphic: true
      t.integer :rating

      t.timestamps
    end
  end
end
