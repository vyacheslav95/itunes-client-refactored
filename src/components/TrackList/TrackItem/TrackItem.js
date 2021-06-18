import React from 'react'
import './TrackItem.css'
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo"
import {reExpandTrack} from "../../../store/actions/music"
import {useDispatch, useSelector} from "react-redux"

const TrackItem = ({
                     index,
                     artist,
                     image,
                     trackName,
                     trackCount,
                     trackTime,
                     trackPrice,
                     collection,
                     collectionPrice,
                     genre,
                   }) => {

  const expandedTrack = useSelector(state => state.music.expandedTrack)
  const dispatch = useDispatch()

  const isExpanded = expandedTrack === index

  const additionalInfo = (
    isExpanded && <AdditionalInfo
      index={index}
      artist={artist}
      trackName={trackName}
      collection={collection}
      trackCount={trackCount}
      collectionPrice={collectionPrice}
      trackTime={trackTime}
      trackPrice={trackPrice}
    />
  )

  return (
    <>
      <div className={`TrackItem ${index % 2 ? null : 'odd'}`}
           onClick={() => dispatch(reExpandTrack(index))}
      >
        <div><img src={image} alt={'pic'}/></div>
        <div>{artist}</div>
        <div>{trackName}</div>
        <div>{collection}</div>
        <div>{genre}</div>
        <div className={'expandCollapseButton'}>
          <i className={isExpanded ? 'fa fa-minus' : 'fa fa-plus'}/>
        </div>
      </div>
      {additionalInfo}
    </>
  )
}

export default TrackItem