@tracks.each do |track|
    # json.set! track.id do 
        json.extract! track :title :artist_id :id
        json.photoUrl url_for(track.photo_url)
        json.trackUrl url_for(track.track_url)
    # end
end