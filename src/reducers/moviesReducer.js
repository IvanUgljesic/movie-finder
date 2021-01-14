const moviesReducer = (movies = {page:1}, action) => {
    switch (action.type) {
     case 'FETCH_MOVIES':
      return {
          ...movies,
          movies: action.payload
      }
     case 'SET_PAGE':
      return {
          ...movies,
          page: action.payload
      }
     case 'INPUT_ERROR':
      return {
        page:1,
        movies: {
            results:[]
        }
      }
     default:
      return movies
    }
}

export default moviesReducer;