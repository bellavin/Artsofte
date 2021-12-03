import {State, Message} from '../types';
import {filterByTime, filterByNum, filterByDuration} from '../utils';

export const getMessages = (state: State): Message[] => {
  const {messages, filterByTimeType, filterByNumType, filterByDurationType} = state;

  return [...messages]
    .sort((a: Message, b: Message) => b.received.getTime() - a.received.getTime())
    .filter((item) => filterByTime(item.received, filterByTimeType))
    .filter((item) => filterByNum(item.from, filterByNumType))
    .filter((item) => filterByDuration(item.duration, filterByDurationType));
};
