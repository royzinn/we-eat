class Address < ApplicationRecord
  belongs_to :addressable, polymorphic: true

  validates :zip_code, :city, :street, :country, presence: true

  geocoded_by :full_address
  after_validation :geocode

  private

  def full_address
    "#{street}, #{city}, #{country}"
  end
end
