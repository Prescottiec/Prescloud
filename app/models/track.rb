class Track < ApplicationRecord
    validates :title, :artist_id, presence: true

    has_one_attached :photo_url
    has_one_attached :track_url

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User

    has_many :comments
end
