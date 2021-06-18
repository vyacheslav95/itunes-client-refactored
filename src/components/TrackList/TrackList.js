import React from 'react'
import './TrackList.css'
import {useSelector} from "react-redux"
import TrackItem from "./TrackItem/TrackItem"
import millisToMinutesAndSeconds from "../../utils/millisToMinutesAndSeconds"
import NoTracks from "./NoTracks/NoTracks"

const TrackList = () => {
  const tracks = useSelector(state => state.music.trackList)

  const trackItems = !!tracks && tracks.map((track, index) => {
    return (
      <TrackItem
        key={index}
        index={index}
        image={track.artworkUrl100}
        artist={track.artistName}
        trackName={track.trackName}
        genre={track.primaryGenreName}
        collection={track.collectionName}
        trackCount={track.trackCount}
        collectionPrice={track.collectionPrice}
        trackTime={millisToMinutesAndSeconds(track.trackTimeMillis)}
        trackPrice={track.trackPrice}
      />
    )
  })

  return (
    <>
      <div className={'TrackList'}>
        <div/>
        <div>Artist</div>
        <div>Track</div>
        <div>Collection</div>
        <div>Genre</div>
        <div/>
      </div>
      <hr/>
      {!!trackItems.length ? trackItems : <NoTracks/>}
    </>
  )
}

export default TrackList