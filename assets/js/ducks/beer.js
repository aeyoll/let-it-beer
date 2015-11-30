import $ from 'jquery'

const BEER_ADD = 'BEER_ADD'
const BEER_DELETE = 'BEER_DELETE'

const initialState = {
  beers: []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case BEER_ADD:
      return {
        ...state,
        'beers': [],
      }

    case BEER_DELETE:
      return {
        ...state,
        'beers': [],
      }

    default:
      return state
  }
}

export function addBeer(beer) {
  return {
    type: BEER_ADD,
    item: beer
  }
}

export function deleteBeer(beer) {
  return {
    type: BEER_DELETE,
    item: beer
  }
}
