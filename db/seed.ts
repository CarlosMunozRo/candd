import { db, Song } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Song).values([
	{
	  title: 'POWER',
	  artist: 'Kanye West',
	  url: 'spotify:track:2gZUPNdnz5Y45eiGxpHGSc',
	  dateAdded: new Date('2026-01-30'),
	},
	{
	  title: 'All of the Lights',
	  artist: 'Kanye West',
	  url: 'spotify:track:22L7bfCiAkJo5xGSQgmiIO',
	  dateAdded: new Date('2026-01-29'),
	},
	{
	  title: 'Monster',
	  artist:'Kanye West',
	  url: 'spotify:track:1ZHYJ2Wwgxes4m8Ba88PeK',
	  dateAdded: new Date('2026-01-28'),
	},
	{
	  title: 'Runaway',
	  artist:'Kanye West',
	  url: 'spotify:track:3DK6m7It6Pw857FcQftMds',
	  dateAdded: new Date('2026-01-27'),
	},
	{
	  title: 'Devil in a New Dress',
	  artist:'Kanye West',
	  url: 'spotify:track:1UGD3lW3tDmgZfAVDh6w7r',
	  dateAdded: new Date('2026-01-26'),
	}
  ]);
}
