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

  it 'averages and rounds review ratings' do
    restaurant = create(:restaurant)
    one_star_review = create(:review, reviewable: restaurant)
    two_star_review = create(:review, rating: 2, reviewable: restaurant)
    expect(restaurant.rating).to eq(2)

    three_star_review = create(:review, rating: 3, reviewable: restaurant)
    expect(restaurant.rating).to eq(2)
  end
end
