const DESCRIPTIONS = [
'Пейзаж',
'Селфи',
'Ужин в ресторане',
'Автомобиль',
'Группвое фото'
];
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const PHOTO_CARD_COUNT = 25;
const NAMES = [
  'Леонардо',
  'Алессандро',
  'Томассо',
  'Франческо',
  'Лоренцо',
  'Маттиа'
];
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const AVATAR_COUNT = 6;
const COMMENTS_COUNT = 2;
const SENTENCES_MIN_COUNT = 1;
const SENTENCES_MAX_COUNT = 2;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const createMessage = () =>
  Array.from ({ length: getRandomInteger (SENTENCES_MIN_COUNT, SENTENCES_MAX_COUNT)}, () =>
    getRandomArrayElement (COMMENT_MESSAGES)).join('');

const createComment = () => ({
  id : createIdGenerator(),
  avatar : `img/avatar-${getRandomInteger (1, AVATAR_COUNT)}.svg`,
  message : createMessage (),
  name : getRandomArrayElement (NAMES)
});

const createPhotoCard = (index) => ({
  id: index,
  url: `photos/${createIdGenerator}.jpg`,
  description: getRandomArrayElement (DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(0, COMMENTS_COUNT)},createComment)
});

const getPhotoCards = () =>
  Array.from ({ length: PHOTO_CARD_COUNT}, (_, index) =>
    createPhotoCard(index + 1)
  );
getPhotoCards ();
