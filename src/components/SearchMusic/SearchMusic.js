import React from 'react'
import './SearchMusic.css'
import {useDispatch} from "react-redux"
import {fetchTracks, updateSearchField} from "../../store/actions/music"

const SearchMusic = () => {
  const dispatch = useDispatch()

  return (
    <div className={'SearchMusic'}>
      <form
        onSubmit={event => dispatch(fetchTracks(event))}
      >
        <input
          type="text"
          placeholder={'Artist, Track, Album...'}
          onChange={event => dispatch(updateSearchField(event.target.value))}
        />
        <button type={'submit'}>
          <i className={'fa fa-search'}></i>
        </button>
      </form>
    </div>
  )
}

export default SearchMusic