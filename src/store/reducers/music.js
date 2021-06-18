import {
  COLLAPSE_TRACK,
  EXPAND_TRACK,
  FETCHING_ERROR,
  FETCHING_STARTED,
  FETCHING_SUCCESS,
  UPDATE_SEARCH_FIELD,
  UPDATE_TRACK_LIST
} from "../actions/actionTypes";

const initialState = {
  fetching: false,
  searchField: null,
  trackList: null,
  expandedTrack: null,
  error: null
}

function music(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_FIELD:
      return {...state, searchField: action.payload}
    case FETCHING_STARTED:
      return {...state, fetching: true}
    case FETCHING_SUCCESS:
      return {...state, fetching: false}
    case FETCHING_ERROR:
      return {...state, fetching: false, error: action.payload}
    case UPDATE_TRACK_LIST:
      return {...state, trackList: action.payload}
    case EXPAND_TRACK:
      return {...state, expandedTrack: action.payload}
    case COLLAPSE_TRACK:
      return {...state, expandedTrack: null}
    default:
      return state
  }
}

export default music