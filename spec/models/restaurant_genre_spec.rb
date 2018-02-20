require 'rails_helper'

RSpec.describe RestaurantGenre, type: :model do
  it { should belong_to(:restaurant) }
  it { should belong_to(:genre) }
end
