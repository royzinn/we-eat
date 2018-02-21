class Restaurant < ApplicationRecord
  include Addressed, Reviewable

  NO_RATING = 0

  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :restaurant_genres, dependent: :destroy
  has_many :genres, through: :restaurant_genres

  validates :name, presence: true, uniqueness: true
  validates :max_delivery_time, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  def update_rating_from_review
    self.rating = reviews.exists? ? reviews.average(:rating).round : NO_RATING
    save!
  end
end
