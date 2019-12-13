import { types } from './types';
import { initState } from './initState';

export default function mainReducer(state = initState, action) {
    switch (action.type) {

        // Loading
        case types.LOADING: {
            return {
                ...state,
                isLoad: true,
            }
        }

        // Success
        case types.GET_ACADEMIES_SUCCESS: {
            return {
                ...state,
                academies: action.payload.academies,
                isLoad: false,
                isInit: false,
                hasMore: action.payload.hasMore,
                error: {},
            }
        }
        case types.UPDATE_ACADEMIES_SUCCESS: {
            return {
                ...state,
                academies: action.payload.academies,
                isLoad: false,
                isInit: false,
                hasMore: action.payload.hasMore,
                error: {},
            }
        }
        case types.ADD_ACADEMY_SUCCESS: {
            return {
                ...state,
                isLoad: false,
                academies: [action.academiesData, ...state.academies],
                isAdded: true,
                error: {},
            }
        }
        case types.CLEAR_ACADEMIES_SUCCESS: {
            return {
                ...state,
                isLoad: false,
                error: {},
            }
        }

        // Errors
        case types.GET_ACADEMIES_ERROR: {
            return {
                ...state,
                isLoad: false,
                error: action.payload,
            }
        }
        case types.UPDATE_ACADEMIES_ERROR: {
            return {
                ...state,
                isLoad: false,
                error: action.payload,
            }
        }
        case types.CLEAR_ACADEMIES_ERROR: {
            return {
                ...state,
                isLoad: false,
                error: action.payload,
            }
        }
        case types.ADD_ACADEMY_ERROR: {
            return {
                ...state,
                isLoad: false,
                error: action.payload,
            }
        }
        default:
            return state
    }
};