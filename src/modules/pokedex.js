import axios from 'axios';
import * as _ from 'underwater/src/es5';
import iziToast from 'izitoast';
import { byId } from '../utils';

export const FETCH_START = 'pokdex/FETCH_START';
export const FETCH_FAIL = 'pokdex/FETCH_FAIL';
export const FETCH_SUCCESS = 'pokdex/FETCH_SUCCESS';
export const ADD = 'pokedex/ADD';
export const REMOVE = 'pokedex/REMOVE';

export const INIT = {
    loading: false,
    error: false,
    errorMessage: '',
    list: []
};

export default (state = INIT, action) => {
    switch (action.type) {
        case ADD:
            const filteredList = state.list.filter(pokemon => {
                return pokemon.id === action.payload.id;
            });

            if (filteredList.length) {
                return state;
            }

            return {
                ...state,
                list: _.push(action.payload, state.list).sort(byId)
            };

        case REMOVE:
            return {
                ...state,
                list: state.list.filter(pokemon => {
                    return pokemon.id !== action.payload;
                })
            };

        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: false,
                errorMessage: ''
            };

        case FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            };

        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: ''
            };

        default:
            return state;
    }
};

export const fetchPokemon = id => async dispatch => {
    dispatch({ type: FETCH_START });

    try {
        const result = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );

        if (result) {
            dispatch(fetchSuccess(result.data));
            dispatch(addPokemon(result.data));
        }
    } catch (error) {
        dispatch(fetchFail());
    }
};

export const fetchSuccess = () => ({
    type: FETCH_SUCCESS
});

export const fetchFail = (error = 'Sorry! Pokémon scaped') => {
    iziToast.error({
        title: 'Error',
        message: error,
    });

    return {
        type: FETCH_FAIL
    };
};

export const addPokemon = pokemon => ({
    type: ADD,
    payload: pokemon
});

export const removePokemon = pokemonId => ({
    type: REMOVE,
    payload: pokemonId
});
