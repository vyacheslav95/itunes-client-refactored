import React from 'react'
import './Music.css'
import SearchMusic from "../SearchMusic/SearchMusic"
import TrackList from "../TrackList/TrackList"

const Music = () => {
  return (
    <div className={'Music'}>
      <SearchMusic/>
      <TrackList/>
    </div>
  )
}

export default Music