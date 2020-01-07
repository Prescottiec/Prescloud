class Track < ApplicationRecord
    validates :title, :artist_id, presence: true

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User

    has_many :comments
end
