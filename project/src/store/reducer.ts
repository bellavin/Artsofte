import {createReducer} from '@reduxjs/toolkit';
import {setMessages, setPaginationAction, setFilterByTimeAction, setFilterByNumAction, setFilterByDurationAction} from './actions';
import {State} from '../types';


const initialState: State = {
  messages: [],
  pagination: 0,
  filterByTimeType: '',
  filterByNumType: '',
  filterByDurationType: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setMessages, (state, action) => {
      state.messages = action.payload;
    })
    .addCase(setPaginationAction, (state, action) => {
      state.pagination = action.payload;
    })
    .addCase(setFilterByTimeAction, (state, action) => {
      state.filterByTimeType = action.payload;
    })
    .addCase(setFilterByNumAction, (state, action) => {
      state.filterByNumType = action.payload;
    })
    .addCase(setFilterByDurationAction, (state, action) => {
      state.filterByDurationType = action.payload;
    });
});

export {reducer};
