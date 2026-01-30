import { db, Song } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Song).values([
	{
	  title: 'Song Title 1',
	  artist: 'Artist 1',
	  url: 'https://example.com/song1',
	  dateAdded: new Date(),
	},
	{
	  title: 'Song Title 2',
	  artist: 'Artist 2',
	  url: 'https://example.com/song2',
	  dateAdded: new Date(),
	},
  ]);
}
