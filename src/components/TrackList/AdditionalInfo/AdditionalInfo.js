import React from 'react'
import './AdditionalInfo.css'
import {useDispatch} from "react-redux"
import {collapseTrack} from "../../../store/actions/music"

const AdditionalInfo = ({
                          index,
                          artist,
                          trackName,
                          collection,
                          trackCount,
                          collectionPrice,
                          trackTime,
                          trackPrice,
                        }) => {
  const dispatch = useDispatch()

  return (
    <div className={`AdditionalInfo ${index % 2 ? null : 'odd'}`}
         onClick={() => dispatch(collapseTrack())}
    >
      <div/>
      <div>
        <span>{artist} - {trackName}&nbsp;<i className={'fa fa-music'}/></span>
      </div>
      <div/>
      <div/>
      <div>
        <div><strong>Collection:</strong>&nbsp;{collection}</div>
        <div><strong>Track Count:</strong>&nbsp;{trackCount}</div>
        <div><strong>Price:</strong>&nbsp;{collectionPrice}</div>
      </div>
      <div>
        <div><strong>Track duration:</strong>&nbsp;{trackTime}</div>
        <div><strong>Track Price:</strong>&nbsp;{trackPrice} USD</div>
      </div>
    </div>
  )
}

export default AdditionalInfo