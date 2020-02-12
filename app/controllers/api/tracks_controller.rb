class Api::TracksController < ApplicationController
    def index
        @tracks = Track.all
        render json: @tracks
    end

    def create
        @track = Track.new(track_params)
        @track.artist_id = current_user.id
        if @track.save
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def show
        @track = Track.find(params[:id])
        render :show
    end

    def update
        @track = Track.find(params[:id])
        @track.artist_id = current_user.id
        if @track.update(track_params)
            render "api/tracks/show"
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def destroy
        @track = Track.find(params[:id])
        @track.destroy
        render "api/tracks/show"
    end

    private
    def track_params
        params.require(:track).permit(:title)
    end
end
