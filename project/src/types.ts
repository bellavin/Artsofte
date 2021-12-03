import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';

export type State = {
  messages: Message[],
  pagination: number,
  filterByTimeType: string,
  filterByNumType: string,
  filterByDurationType: string,
}

export type Message = {
  id: string | undefined,
  received: Date,
  from: string,
  to: string,
  date: {
    localTime: Date,
    timeShift: number,
    text: string,
  },
  mime: {
    class: string,
    estimatedSize: number,
    subtype: string,
    type: string,
    mime: {
      disposition: string,
      dispositionFilename: string,
      dispositionVoice: string,
      estimatedSize: number,
      partId: string,
      subtype: string,
      type: string,
    }
  },
  duration: number
};

export enum ActionType {
  SetMessages = 'setMessages',
  SetPagination = 'setPagination',
  SetFilterByTime = 'setFilterByTime',
  SetFilterByNum = 'setFilterByNum',
  SetFilterByDuration = 'setFilterByDuration'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
