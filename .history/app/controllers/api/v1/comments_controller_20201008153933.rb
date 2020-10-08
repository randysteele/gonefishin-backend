class Api::V1::CommentsController < ApplicationController

    before_action :set_destination
    skip_before_action :verify_authenticity_token
    Access-Control-Allow-Origin : http://localhost:3000
    Access-Control-Allow-Credentials : true
    Access-Control-Allow-Methods : GET, POST, OPTIONS
    Access-Control-Allow-Headers : Origin, Content-Type, Accept

    def index
        @comments = Comment.all
        render json: @comments 
    end


    def show 
        @comment = Comment.find(params[:id])
        render json: @comment
    end

    def create 
        @comment = @destination.comments.new(comment_params)
      if @comment.save
        render json: @destination
    else
        render json: {Error: "SORRY, CAN'T COMPLETE YOUR REQUEST"}
    end
end

    def destroy 
        @comment = Comment.find(params["id"])
        @destination = Destination.find(@comment.destination_id)
        @comment.destroy
        render json: @destination
    end

private 

    def set_destination
        @destination = Destination.find(params[:destination_id])
    end

    def comment_params
        params.require(:comment).permit(:content, :destination_id)
    end

end
