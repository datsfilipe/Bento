// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Filipe',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/datsfilipe',
    },
    {
      id: '2',
      name: 'Dev.to',
      icon: 'file-text',
      link: 'https://dev.to',
    },
    {
      id: '3',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com',
    },
    {
      id: '4',
      name: 'Notion',
      icon: 'edit',
      link: 'https://notion.so',
    },
    {
      id: '5',
      name: 'Gaules TV',
      icon: 'twitch',
      link: 'https://twitch.tv/gaules',
    },
    {
      id: '6',
      name: 'Mail',
      icon: 'mail',
      link: 'https://gmail.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'headphones',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Lo-fi',
        link: 'https://lofi.co/',
      },
      {
        name: 'Hip Hop',
        link: 'https://open.spotify.com/playlist/5W7p8ODbxuohyYEe2sPaGx?si=8d22ccd2ec264206',
      },
      {
        name: 'Oldies',
        link: 'https://open.spotify.com/playlist/6P3Wfx6mwK8edhOOM2K65P?si=7717603e5f5046fd',
      },
      {
        name: 'Rock Nostalgic',
        link: 'https://open.spotify.com/playlist/07wbYOgm1iuqXbOjQrHohs?si=66daa24de2b64b00',
      },
    ],
    secondList: [
      {
        name: 'Youtube',
        link: 'https://youtube.com/',
      },
      {
        name: 'Github /explore',
        link: 'https://github.com/explore',
      },
      {
        name: 'Chess',
        link: 'https://chess.com',
      },
      {
        name: 'Read.cv',
        link: 'https://read.cv/explore',
      },
    ],
  },
};
