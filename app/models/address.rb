class Address < ApplicationRecord
  belongs_to :addressable, polymorphic: true

  validates :zip_code, :city, :street, :country, presence: true
end
