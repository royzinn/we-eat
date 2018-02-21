require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  # validations
  it { should validate_presence_of(:name) }
  it { should validate_numericality_of(:max_delivery_time).only_integer.is_greater_than_or_equal_to(0) }

  # concerns
  it_behaves_like 'reviewable'
  it_behaves_like 'addressable'

  it { should have_many(:genres).through(:restaurant_genres) }

  it 'default to 0 rating when no reviews' do
    restaurant = create(:restaurant)
    expect(restaurant.rating).to eq(0)
  end

  it 'averages and rounds rating after adding review' do
    restaurant = create(:restaurant)
    [1, 2].each { |rating| create(:review, rating: rating , reviewable: restaurant) }
    expect(restaurant.rating).to eq(2)

    three_star_review = create(:review, rating: 3, reviewable: restaurant)
    expect(restaurant.rating).to eq(2)
  end

  it 'averages and rounds rating after deleting review' do
    restaurant = create(:restaurant)
    [1, 2].each { |rating| create(:review, rating: rating , reviewable: restaurant) }
    expect(restaurant.rating).to eq(2)

    Review.last.destroy
    expect(restaurant.reload.rating).to eq(1)

    Review.last.destroy
    expect(restaurant.reload.rating).to eq(0)
  end
end
