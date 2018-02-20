class Address < ApplicationRecord
  belongs_to :addressable, polymorphic: true, optional: true

  validates :zip_code, :city, :street, :country, presence: true
end
