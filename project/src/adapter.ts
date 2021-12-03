import {Message} from './types';
import convert from 'xml-js';
import uniqueId from 'lodash/uniqueId';
import {monthAgo, getRndDate, MUSIC_LIST, getRndArrayElem, getRndInteger} from './adapterUtils';

export const getMessage = (item: any) => {
  const rndMusicTrack = getRndArrayElem(MUSIC_LIST, getRndInteger);
  const rndDate = getRndDate(monthAgo, new Date());
  const {From, To, MIME, Duration} = item;

  const message: Message = {
    id: uniqueId(),
    received: rndDate,
    from: From._text || '',
    to: To._text || '',
    date: {
      localTime: rndDate,
      timeShift: Number(item.Date._attributes.timeShift) || 0,
      text: item.Date._text,
    },
    mime: {
      class: MIME._attributes.class || '',
      estimatedSize: Number(MIME._attributes.estimatedSize) || 0,
      subtype: MIME._attributes.subtype || '',
      type: MIME._attributes.type || '',
      mime: {
        disposition: MIME.MIME._attributes.disposition || '',
        dispositionFilename: rndMusicTrack || '',
        dispositionVoice: MIME.MIME._attributes['Disposition-voice'] || '',
        estimatedSize: Number(MIME.MIME._attributes.estimatedSize),
        partId: MIME.MIME._attributes.partID || '',
        subtype: MIME.MIME._attributes.subtype || '',
        type: MIME.MIME._attributes.type || '',
      },
    },
    duration: Number(Duration._text),
  };
  return message;
};

export const adaptMessages = (xml: string): Message[] => {
  const json = convert.xml2json(xml, {compact: true, spaces: 2});
  const data = JSON.parse(json);
  return data.Root.Data.map((item:any) => getMessage(item));
};
