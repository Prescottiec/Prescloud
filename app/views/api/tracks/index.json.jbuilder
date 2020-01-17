@tracks.each do |track|
    json.set! track.id do 
        json.partial! "api/tracks/track", track: track
        json.photoUrl url_for(track.photo)
    end
end