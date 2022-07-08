import { HomeOutlined } from '@ant-design/icons';
import { MusicIcon, ArtistIcon } from '../public/icons/index';

export const siderItems = [
  { label: 'Home', key: '1', href: '/', icon: <HomeOutlined /> },
  { label: 'Musics', key: '2', href: '/musics', icon: <MusicIcon /> },
  { label: 'Artists', key: '3', href: '/artists', icon: <ArtistIcon /> },
  {
    label: 'YOUR LIBRARY',
    key: 'your_library_submenu',
    children: [
      { label: 'Favorite Songs', key: '4', href: '/favorite' },
      { label: 'Albums', key: '5', href: '/albums' },
      { label: 'Recently Played', key: '6', href: '/recents' },
    ],
  },
  {
    label: 'PLAYLISTS',
    key: 'playlist_submenu',
    children: [{ label: 'My Playlist', key: '7', href: '/myplaylist' }],
  },
];

export const genres = [
  { label: 'Focus', key: 'focus', music: 0 },
  { label: 'Lofi', key: 'lofi', music: 0 },
  { label: 'EDM', key: 'edm', music: 0 },
  { label: 'USUK', key: 'usuk', music: 0 },
];

export const musics = [
  {
    label: 'AZURE - Piano Ambient Song',
    key: '1',
    artist: 'BigRicePiano',
    genre: 'lofi',
  },
  {
    label: 'Sold out',
    key: '1',
    artist: 'Hawk Nelson',
    genre: 'usuk',
  },
];

export const category = [
  { label: 'Spotify choosen', key: 'spotify_choose', music: 0 },
  { label: 'Focus', key: 'focus', music: 0 },
  { label: 'Boost you Mood', key: 'boost_your_mood', music: 0 },
];

export const albums = [
  {
    label: 'Spotify the choosen one',
    subtitle: '',
    category: 'spotify_choose',
    music: [
      {
        label: 'AZURE - Piano Ambient Song',
        key: '1',
        artist: 'BigRicePiano',
        genre: 'lofi',
      },
    ],
  },
  {
    label: 'Intense Study',
    subtitle:
      'Focus-enhancing piano for your study session. Focus-enhancing piano for your study session. Focus-enhancing piano for your study session.',
    category: 'focus',
    music: [
      {
        label: 'AZURE - Piano Ambient Song',
        key: '1',
        artist: 'BigRicePiano',
        genre: 'lofi',
      },
    ],
  },
  {
    label: 'Motion Up',
    subtitle:
      'Up you mood to the highest stage. Like "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    category: 'boost_your_mood',
    music: [
      {
        label: 'Sold out',
        key: '1',
        artist: 'Hawk Nelson',
        genre: 'usuk',
      },
    ],
  },
];
