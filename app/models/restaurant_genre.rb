class RestaurantGenre < ApplicationRecord
  belongs_to :restaurant
  belongs_to :genre
end
