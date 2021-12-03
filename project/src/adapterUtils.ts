export const convertYYYYMMDDToISOFormat = (str: string) => {
  const date = str.split('T')[0];
  const time = str.split('T')[1];

  if (date.length !==8 || time.length < 6) {
    return null;
  }

  const YYYY = date.slice(0, 4);
  const MM = date.slice(4, 6);
  const DD = date.slice(6, 8);
  const hh = time.slice(0, 2);
  const mm = time.slice(2, 4);
  const ss = time.slice(4, 6);
  return new Date(`${YYYY}-${MM}-${DD}T${hh}:${mm}:${ss}`);
};

const now = new Date();
export const monthAgo = new Date(now.setMonth(now.getMonth() - 1));

export const getRndDate = (start: Date, end: Date) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const getRndInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min) ) + min;

export const MUSIC_LIST = [
  'https://8.react.pages.academy/static/music/Dance_Of_The_Fireflies.mp3',
  'https://8.react.pages.academy/static/music/Oh_Fire.mp3',
  'https://8.react.pages.academy/static/music/Mourning_Dove.mp3',
  'https://8.react.pages.academy/static/music/19th_Floor.mp3',
];


type getRndArrayCallback = {
  (min: number, max: number): number
};

export const getRndArrayElem = (arr: string[], cb: getRndArrayCallback) => {
  const max = arr.length - 1;
  const rndInt = cb(0, max);
  return arr[rndInt];
};
