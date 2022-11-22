import { v4 as uuid } from 'uuid';

import cardimage1 from '../../assets/image/videoCard/1.webp';
import cardimage2 from '../../assets/image/videoCard/2.webp';
import cardimage3 from '../../assets/image/videoCard/3.webp';
import cardimage4 from '../../assets/image/videoCard/4.webp';
import cardimage5 from '../../assets/image/videoCard/5.webp';
import cardimage6 from '../../assets/image/videoCard/6.webp';
import cardimage7 from '../../assets/image/videoCard/7.webp';
import cardimage8 from '../../assets/image/videoCard/8.webp';
import cardimage9 from '../../assets/image/videoCard/9.webp';
import cardimage10 from '../../assets/image/videoCard/10.webp';

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    category: 'dance',
    thumbnailSrc:
      'https://i.ytimg.com/vi/5zKAAjQgETk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApWOkZB788B-GtzqvePsm39dI-Vw',
    title: 'Uptown Funk - Mark Ronson ft. Bruno Mars / Junsun Yoo Choreography',
    creator: '1MILLION Dance Studio',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',

    playlist: [],
    liked: false,
    watchlater: false,
    source: 'https://www.youtube.com/embed/5zKAAjQgETk',
  },
  {
    _id: uuid(),
    category: 'music',
    thumbnailSrc:
      'https://i.ytimg.com/vi/BddP6PYo2gs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkH6mntazw0BSfrHhPwTiqmBIZuQ',
    title:
      'Kesariya - Brahmāstra | Ranbir Kapoor | Alia Bhatt | Pritam | Arijit Singh | Amitabh Bhattacharya',
    creator: 'Sony Music India',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    playlist: [],
    liked: false,
    watchlater: false,
    source: 'https://www.youtube.com/embed/BddP6PYo2gs',
  },
  {
    _id: uuid(),
    category: 'gaming',
    thumbnailSrc:
      'https://i.ytimg.com/vi/dBX9mBobmEw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOYuzTX5qTpp0WEueOpsRbUN5E2A',
    title:
      'SEKIRO SHADOWS DIE TWICE Walkthrough Gameplay Part 1 - INTRO (Sekiro)',
    creator: 'theRadBrad',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    playlist: [],
    liked: false,
    watchlater: false,
    source: 'https://www.youtube.com/embed/dBX9mBobmEw',
  },
  {
    _id: uuid(),
    category: 'sport',
    thumbnailSrc:
      'https://i.ytimg.com/vi/bkwcFtAMMvw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZMuH7rZ1lhFVpCSDolMBcHOWIKA',
    title: 'Michael Chandler vs Tony Ferguson | FREE FIGHT | UFC 281',
    creator: 'UFC - Ultimate Fighting Championship',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    playlist: [],
    liked: false,
    watchlater: false,
    source: 'https://www.youtube.com/embed/bkwcFtAMMvw',
  },
  {
    _id: uuid(),
    category: 'travel',
    thumbnailSrc:
      'https://i.ytimg.com/vi/gljQOWdIHhw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-NzRZgTr4PHVCw4BLwmgmcZYTUQ',
    title:
      'Heaven on Earth : Pahalgam, Kashmir | Traveling Mondays : Driving Renault Kiger in Kashmir vlog',
    creator: 'Traveling Mondays',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    playlist: [],
    liked: false,
    watchlater: false,
    source: 'https://www.youtube.com/embed/gljQOWdIHhw',
  },
  {
    _id: uuid(),
    category: 'sport',
    thumbnailSrc:
      'https://i.ytimg.com/vi/2P3Hwdln1vA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxWLq6TtYcY9kRQQ8m4yHcaNtkZg',
    title: 'Leon Edwards - A Real Life Rocky Story',
    creator: 'The Fighting Business',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    playlist: [],
    liked: false,
    watchlater: false,
    source: 'https://www.youtube.com/embed/2P3Hwdln1vA',
  },
  {
    _id: uuid(),
    category: 'education',
    thumbnailSrc:
      'https://i.ytimg.com/vi/n5ArCPYnNOo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeQnx3vfjOJSQ64VLWDnZqHVK2ug',
    title: 'Sairat I A Narrative of Contrast',
    creator: 'Cinema Beyond Entertainment',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    playlist: [],
    liked: false,
    watchlater: false,
    source: 'https://www.youtube.com/embed/n5ArCPYnNOo',
  },
  {
    _id: uuid(),
    category: 'dance',
    thumbnailSrc:
      'https://i.ytimg.com/vi/NeRZ_tdD8KM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUbOOW91ltwNznEhDnAmzOdRqyHQ',
    title:
      'Taki Taki - DJ Snake ft. Selena Gomez, Ozuna, Cardi B / Minny Park Choreography',
    creator: '1MILLION Dance Studio',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    playlist: [],
    liked: false,
    watchlater: false,
    source: 'https://www.youtube.com/embed/NeRZ_tdD8KM',
  },
  {
    _id: uuid(),
    category: 'music',
    thumbnailSrc:
      'https://i.ytimg.com/vi/a7fzkqLozwA/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARgUID8ofzAP&rs=AOn4CLCgGbNRkXC6-7IjjTsEtH0L3I0JEQ',
    title: 'Lauv - I Like Me Better [Official Audio]',
    creator: 'Lauv',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    playlist: [],
    liked: false,
    watchlater: false,
    source: 'https://www.youtube.com/embed/a7fzkqLozwA',
  },
  {
    _id: uuid(),
    category: 'dance',
    thumbnailSrc:
      'https://i.ytimg.com/vi/Bu4pd5GPO8o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMHS8P1yuP8hM9cP6nWKKpLOiSdg',
    title: 'Kesariya - Brahmastra | Himanshu Dulani Dance Choreography',
    creator: 'Himanshu Dulani',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    playlist: [],
    liked: false,
    watchlater: false,
    source: 'https://www.youtube.com/embed/Bu4pd5GPO8o',
  },
];
