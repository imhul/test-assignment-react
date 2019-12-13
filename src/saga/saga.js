import { put, call, all, takeLatest, } from 'redux-saga/effects';
import { types } from '../redux/types';
import { initState } from '../redux/initState';
import Notify from '../components/Notify';
import { getApi, postApi } from './api';

const mappedData = academies => (
    academies.map(academy => {
      const { _id, title, status, type, created, updated } = academy;
      return { id: _id, name: title, status, title, type, created, updated }
    })
);

function* fetchSaga() {
    try {
        const response = yield call(getApi);
        if (response.data) {
            const academies = mappedData(response.data);
            yield put({
                type: types.GET_ACADEMIES_SUCCESS,
                payload: {
                    academies: academies, 
                    hasMore: response.hasMore
                },
            });
        }
    } catch (error) {
        yield put({
            type: types.GET_ACADEMIES_ERROR,
            payload: error,
        });
        Notify('error', { 
            title: error.name,
            desc: error.message,
        });
    }
};

function* updateSaga(action) {
    yield put({ type: types.LOADING });
    try {
        const response = yield call(getApi, action.payload.type, action.payload.id);
        if (response.data) {
            const academies = mappedData(response.data);
            yield put({
                type: types.UPDATE_ACADEMIES_SUCCESS,
                payload: {
                    academies: academies, 
                    hasMore: response.hasMore
                },
            });
        }
    } catch (error) {
        yield put({
            type: types.UPDATE_ACADEMIES_ERROR,
            payload: error,
        });
        Notify('error', { 
            title: error.name,
            desc: error.message,
        });
    }
};

function* createSaga(payload) {
    try {
        const academiesData = yield call(postApi, payload);
        if (academiesData && academiesData._id) {
            yield put({
                type: types.ADD_ACADEMY_SUCCESS,
                academiesData,
            });
        }
    } catch (error) {
        yield put({
            type: types.ADD_ACADEMY_ERROR,
            payload: error,
        });
        Notify('error', { 
            title: error.name,
            desc: error.message,
        });
    }
};

function* clearSaga() {
    try {
        yield put({
            type: types.CLEAR_ACADEMIES_SUCCESS,
            payload: {
                ...initState,
            },
        })
    } catch (error) {
        yield put({
            type: types.CLEAR_ACADEMIES_ERROR,
            payload: error,
        });
        Notify('error', { 
            title: error.name,
            desc: error.message,
        });
    }
};

export function* academiesSaga() {
    yield all([
        takeLatest(types.GET_ACADEMIES, fetchSaga),
        takeLatest(types.UPDATE_ACADEMIES, updateSaga),
        takeLatest(types.CLEAR_ACADEMIES, clearSaga),
        takeLatest(types.ADD_ACADEMY, createSaga),
    ])
};
  