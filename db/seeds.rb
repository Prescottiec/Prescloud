# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Track.delete_all

User.create!(
    username: 'Demo_User',
    email: 'demo_user@demo.com',
    password: '123456'
)

track = Track.create(title: "test track", artist_id: 2)
file = open("https://prescloud-seeds.s3-us-west-1.amazonaws.com/Spongebob+Theme+Song+(WithLyrics).mp3")
track.track_url.attach(io: file, filename: "Demo.jng")

file1 = open("https://prescloud-seeds.s3-us-west-1.amazonaws.com/album_cover_default.jpg")
track.photo_url.attach(io: file1, filename: "Demo.mp3")