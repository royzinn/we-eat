class Genre < ApplicationRecord
  has_many :restaurant_genres, dependent: :nullify
  has_many :restaurants, through: :restaurant_genres

  validates :name, presence: true
end
