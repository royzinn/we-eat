class GenresController < ApplicationController
  def index
    render json: Genre.all.as_json
  end
end
