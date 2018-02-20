class Review < ApplicationRecord
  MAX_STAR_RATING = 3
  NO_STAR_RATING = 0

  belongs_to :reviewable, polymorphic: true

  validates :reviewer_name, :rating, presence: true
  validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: NO_STAR_RATING, less_than_or_equal_to: MAX_STAR_RATING }
end
