import {
  COLLAPSE_TRACK,
  EXPAND_TRACK,
  FETCHING_ERROR,
  FETCHING_STARTED,
  FETCHING_SUCCESS,
  UPDATE_SEARCH_FIELD,
  UPDATE_TRACK_LIST
} from "./actionTypes";

export function updateSearchField(newValue) {
  return {
    type: UPDATE_SEARCH_FIELD,
    payload: newValue
  }
}

export function fetchTracks(event) {
  return async (dispatch, getState) => {
    event.preventDefault()

    if (getState().fetching) {
      return
    }

    dispatch(collapseTrack())

    dispatch(fetchingStarted())

    try {
      const searchQuery = getState().music.searchField
      const url = `https://itunes.apple.com/search?limit=12&explicit=no&term=${searchQuery}&country=RU&lang=EN`
      const response = await fetch(url)
      const data = await response.json()
      dispatch(updateTrackList(data.results))
      dispatch(fetchingSuccess())
    } catch (e) {
      dispatch(fetchingError(e))
      alert('Oops! Something went wrong...')
      console.log(e)
    }
  }
}

export function updateTrackList(data) {
  return {
    type: UPDATE_TRACK_LIST,
    payload: data
  }
}

export function fetchingStarted() {
  return {
    type: FETCHING_STARTED
  }
}

export function fetchingSuccess() {
  return {
    type: FETCHING_SUCCESS
  }
}

export function fetchingError(error) {
  return {
    type: FETCHING_ERROR,
    payload: error
  }
}

export function reExpandTrack(trackToExpand) {
  return (dispatch, getState) => {
    if (getState().music.expandedTrack === trackToExpand) {
      dispatch(collapseTrack())
    } else {
      dispatch(expandTrack(trackToExpand))
    }
  }
}

export function expandTrack(expandedTrack) {
  return {
    type: EXPAND_TRACK,
    payload: expandedTrack
  }
}

export function collapseTrack() {
  return {
    type: COLLAPSE_TRACK
  }
}