class RestaurantsController < ApplicationController
  def index
    restaurants = Restaurant.all
    render json: restaurants.as_json(include: [:addresses, :reviews])
  end

  def show
    restaurant = Restaurant.friendly.find(params[:id])
    render json: restaurant.as_json(include: [:addresses, :reviews])
  end
end
