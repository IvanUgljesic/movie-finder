require('dotenv').config();
export const fetchMovies = (params) => dispatch => {
    let query = '';
    let api_key = process.env.REACT_APP_MOVIEDB_APIKEY;
    if(params.title !== '') query += params.title;
    if(params.year !== '') query += '&year=' + params.year;
    if(params.title !== ''){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query.trim()}&page=${params.page}`)
            .then(response => response.json())
            .then(response => {
                let data = response;
                dispatch({
                    type: 'FETCH_MOVIES',
                    payload: data
                    })
    
            })
            .catch(err => console.log(err));  
    }             
    else {
        dispatch({type: 'INPUT_ERROR', payload:null})
    } 
    
}

export const setPage = (page) => dispatch => {
    dispatch({type:'SET_PAGE', payload:page})
}