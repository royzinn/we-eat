class Restaurant < ApplicationRecord
  include Addressed, Reviewable

  extend FriendlyId
  friendly_id :name, use: :slugged

  attribute :rating

  has_many :restaurant_genres, dependent: :destroy
  has_many :genres, through: :restaurant_genres

  validates :name, presence: true
  validates :max_delivery_time, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  def rating
    reviews&.average(:rating)&.round || 0
  end
end
