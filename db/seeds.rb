Genre.destroy_all
Address.destroy_all
Review.destroy_all
Restaurant.destroy_all

genres = []
['sushi', 'vegeterian', 'italian', 'israeli', 'oriental'].each { |genre_name| genres << Genre.create!(name: genre_name) }

['hubba bubba', 'sushi samba', 'taizu'].each_with_index do |restaurant_name, i|
  rest = Restaurant.create!(name: restaurant_name, accepts_10bis: [true, false].sample, max_delivery_time: [10, 20, 30, 40].sample, genres: genres.sample(2))
  rest.addresses << Address.create!(zip_code: "12#{i}", country: 'israel', country_code: 'il', street: "ibn gavirol 30", city: 'tel-aviv', addressable: rest)
  rest.reviews << Review.create!(comment: ['great food', 'dirty as hell'].sample, reviewer_name: 'john doe', reviewable: rest, rating: [1, 2, 3].sample)
end

