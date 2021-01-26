import { getAllClients } from '../../db';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchClients = () => (dispatch) => {
  dispatch(setLoaded(false));
  dispatch(setClients(getAllClients()));
};

export const setClients = (items) => ({
  type: 'SET_CLIENTS',
  payload: items,
});

export const selectClient = (item) => ({
  type: 'SELECT_CLIENT',
  payload: item,
});
