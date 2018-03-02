import axios from 'axios';

export const FETCH_START = 'all/FETCH_START';
export const FETCH_FAIL = 'all/FETCH_FAIL';
export const FETCH_SUCCESS = 'all/FETCH_SUCCESS';

const INIT = {
    loading: false,
    error: false,
    errorMessage: '',
    next: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon: []
};

export default (state = INIT, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                error: false,
                loading: true,
                errorMessage: ''
            };
        case FETCH_FAIL:
            return {
                ...state,
                error: true,
                loading: false,
                errorMessage: action.payload
            };

        case FETCH_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                errorMessage: '',
                pokemon: [...state.pokemon, ...action.payload.results],
                next: action.payload.next
            };

        default:
            return state;
    }
};

export const fetchAll = next => async dispatch => {
    dispatch({ type: FETCH_START });
    
    const result = await axios.get(next);
    
    if (result) {
        dispatch(fetchSuccess(result.data));
    } else {
        dispatch(fetchFail());
    }
};

export const fetchSuccess = list => ({
    type: FETCH_SUCCESS,
    payload: list
});

export const fetchFail = (error = 'Não foi possível pegar novos Pokémon') => ({
    type: FETCH_FAIL,
    payload: error
});
