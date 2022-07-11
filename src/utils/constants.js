import { HomeOutlined, AlignLeftOutlined } from '@ant-design/icons';
import { ArtistIcon } from '../public/icons/index';

export const siderItems = [
  { label: 'Home', key: '1', href: '/', icon: <HomeOutlined /> },
  { label: 'Browse', key: '2', href: '/browse', icon: <AlignLeftOutlined /> },
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

export const topHitAlbums = [
  {
    label: 'Elements',
    subtitle: '',
    artist: 'Danny Olson',
    image: 'https://i.scdn.co/image/ab67616d00001e020e40416201dd9bf0333a903d',
    category: 'top_hit_album',
    primaryColor: '#3d91f4',
    music: [
      {
        label: 'Tide',
        key: '1',
        artist: 'Danny Olson',
        genre: '',
      },
    ],
  },
  {
    label: 'E-Side',
    subtitle: '',
    artist: 'YOASOBI',
    image: 'https://i.scdn.co/image/ab67616d00001e027d5038f51788a1719217ad4b',
    category: 'top_hit_album',
    primaryColor: '#f15e6c',
    music: [
      {
        label: 'Into the night',
        key: '1',
        artist: 'YOASOBI',
        genre: 'Japanese',
      },
    ],
  },
];

export const albums = [
  {
    label: 'EDM Hits',
    subtitle: 'Various Artist',
    image: 'https://i.scdn.co/image/ab67616d00001e02d8d5dfa3894b6a1ea9bf6656',
    category: 'spotify_choose',
    primaryColor: 'rgb(13, 150, 0)',
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
    label: 'EDM Hits',
    subtitle: 'Various Artist',
    image: 'https://i.scdn.co/image/ab67616d00001e02d8d5dfa3894b6a1ea9bf6656',
    category: 'spotify_choose',
    primaryColor: 'rgb(13, 150, 0)',
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
    label: 'EDM Hits',
    subtitle: 'Various Artist',
    image: 'https://i.scdn.co/image/ab67616d00001e02d8d5dfa3894b6a1ea9bf6656',
    category: 'spotify_choose',
    primaryColor: 'rgb(13, 150, 0)',
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
    label: 'EDM Hits',
    subtitle: 'Various Artist',
    image: 'https://i.scdn.co/image/ab67616d00001e02d8d5dfa3894b6a1ea9bf6656',
    category: 'spotify_choose',
    primaryColor: 'rgb(13, 150, 0)',
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
    label: 'EDM Hits',
    subtitle: 'Various Artist',
    image: 'https://i.scdn.co/image/ab67616d00001e02d8d5dfa3894b6a1ea9bf6656',
    category: 'spotify_choose',
    primaryColor: 'rgb(13, 150, 0)',
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
    label: 'EDM Hits',
    subtitle: 'Various Artist',
    image: 'https://i.scdn.co/image/ab67616d00001e02d8d5dfa3894b6a1ea9bf6656',
    category: 'spotify_choose',
    primaryColor: 'rgb(13, 150, 0)',
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
    label: 'EDM Hits',
    subtitle: 'Various Artist',
    image: 'https://i.scdn.co/image/ab67616d00001e02d8d5dfa3894b6a1ea9bf6656',
    category: 'spotify_choose',
    primaryColor: 'rgb(13, 150, 0)',
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
    image: 'https://i.scdn.co/image/ab67706f0000000218e20d8d2bc7aa007d305e57',
    category: 'focus',
    primaryColor: 'rgb(220, 147, 0)',
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
    primaryColor: 'rgb(231, 71, 30)',
    image: 'https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95',
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
