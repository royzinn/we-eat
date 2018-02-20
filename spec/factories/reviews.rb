FactoryBot.define do
  factory :review do
    comment "Not the best restaurant"
    reviewer_name "mr big"
    reviewable nil
    rating 1
  end
end
