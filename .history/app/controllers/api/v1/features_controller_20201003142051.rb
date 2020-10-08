class Api::V1::FeaturesController < ApplicationController

    before_action :set_destination

    def index
        @features = @destination.features       
        render json: @features
    end

    def show 
        @feature = Feature.find(params[:id])
        render json: @feature
    end

    def create 
        @feature = @destination.features.new(feature_params)
      if @feature.save
        render json: @destination
    else
        render json: {Error: "SORRY, CAN'T COMPLETE YOUR REQUEST"}
    end
end

    def destroy 
    #    byebug
        @feature = Feature.find(params["id"])
        @destination = Destination.find(@feature.destination_id)
        @feature.destroy
        render json: @destination
    end

private 

    def set_destination
        @destination = Destination.find(params[:destination_id])
    end

    def feature_params
        params.require(:feature).permit(:name, :destination_id)
    end

end
