export const fetchTracks = () => (
    $.ajax({
        method: 'GET',
        url: '/api/tracks'
    })
)

export const fetchTrack = (trackId) => (
    $.ajax({
        method: 'GET',
        url: `/api/tracks/${trackId}`,
        data: { trackId }
    })
)

export const uploadTrack = (track) => (
    $.ajax({
        method: 'POST',
        url: '/api/tracks',
        data: { track }
    })
)

export const updateTrack = (track) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/tracks/${track.id}`,
        data: { track }
    })
)

export const deleteTrack = (trackId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/tracks/${trackId}`
    })
)