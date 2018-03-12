class RestaurantsController < ApplicationController
  def index
    render json: Restaurant.all.as_json(include: [:addresses, :reviews, :genres])
  end

  def show
    restaurant = Restaurant.friendly.find(params[:id])
    render json: restaurant.as_json(include: [:addresses, :reviews])
  end
end
