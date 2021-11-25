/* eslint-disable import/prefer-default-export */
const columns = ['Problem solving', 'Job knowledge', 'Time management', 'Communication', 'Achievement'];

const series = [{
  name: 'Ariel K.',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg',
  data: [4, 7, 4, 3, 6],
}, {
  name: 'Kate E.',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHI7Ycu-v_h0GlkoMdN9JGhCmBK2w4uiCLw&usqp=CAU',
  data: [2, 9, 7, 5, 2],
}, {
  name: 'Jerry V.',
  avatar: 'https://hardtickettohomevideo.files.wordpress.com/2015/01/nick-cage-conair.jpg?w=570',
  data: [2, 10, 2, 1, 8],
}, {
  name: 'Kevin H.',
  avatar: 'https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/02/27181649/Nicolas-Cage-FFF.jpg',
  data: [8, 4, 3, 7, 4],
}, {
  name: 'Radha R.',
  avatar: 'https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/09/11172859/Nicolas-Cage-Countdown-Rep.jpg',
  data: [6, 1, 3, 1, 7],
}, {
  name: 'Maat W.',
  avatar: 'https://media.gq.com/photos/5582f8c409f0bee56440b484/master/pass/entertainment-2011-05-cage-match-nic-cage_300x430.jpg',
  data: [6, 10, 4, 8, 2],
}];

const colors = {
  1: {
    text: '#000',
    background: '#FF9900',
  },
  2: {
    text: '#000',
    background: '#FFAD33',
  },
  3: {
    text: '#000',
    background: '#FFC266',
  },
  4: {
    text: '#000',
    background: '#FFD699',
  },
  5: {
    text: '#000',
    background: '#FFEBCC',
  },
  6: {
    text: '#000',
    background: '#DEDBF8',
  },
  7: {
    text: '#000',
    background: '#BDB7F1',
  },
  8: {
    text: '#fff',
    background: '#9B93E9',
  },
  9: {
    text: '#fff',
    background: '#7A6FE2',
  },
  10: {
    text: '#fff',
    background: '#594BDB',
  },
};

const getColors = (value: number) => ({
  text: value > 5 ? '#000' : '#fff',
  background: `hsl(${value * 36},100%,${value * 9}%)`,
});

export const chartArguments = {
  columns,
  series,
  colors,
};

export const randomColorArguments = {
  columns,
  series,
  getColors,
};
