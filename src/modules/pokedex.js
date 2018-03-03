import axios from 'axios';
import * as _ from 'underwater/src/es5';
import { byId } from '../utils';

export const FETCH_START = 'pokdex/FETCH_START';
export const FETCH_FAIL = 'pokdex/FETCH_FAIL';
export const FETCH_SUCCESS = 'pokdex/FETCH_SUCCESS';
export const ADD = 'pokedex/ADD';
export const REMOVE = 'pokedex/REMOVE';

export const INIT = {
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
                    return pokemon.id === action.payload;
                })
            };

        default:
            return state;
    }
};

export const addPokemon = pokemon => ({
    type: ADD,
    payload: pokemon
});

export const removePokemon = pokemonId => ({
    type: REMOVE,
    payload: pokemonId
});
