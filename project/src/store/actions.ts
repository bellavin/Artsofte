import {createAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Message, ActionType} from '../types';
import {adaptMessages} from '../adapter';
import {ThunkActionResult} from '../types';
import {MESSAGES_URL} from '../consts';


const ERROR_MESSAGE = 'Что-то пошло не так';

export const setMessages = createAction(
  ActionType.SetMessages,
  (messages: Message[]) => ({
    payload: messages,
  }),
);
export const setPaginationAction = createAction(
  ActionType.SetPagination,
  (number: number) => ({
    payload: number,
  }),
);
export const setFilterByTimeAction = createAction(
  ActionType.SetFilterByTime,
  (type: string) => ({
    payload: type,
  }),
);
export const setFilterByNumAction = createAction(
  ActionType.SetFilterByNum,
  (string: string) => ({
    payload: string,
  }),
);
export const setFilterByDurationAction = createAction(
  ActionType.SetFilterByDuration,
  (type: string) => ({
    payload: type,
  }),
);
export const fetchMessagesAction = (): ThunkActionResult =>
  async (dispatch): Promise<void> => {
    try {
      const response = await axios.get(MESSAGES_URL);
      const {data} = response;
      dispatch(setMessages(adaptMessages(data)));
    } catch (error) {
      toast.info(ERROR_MESSAGE);
    }
  };
