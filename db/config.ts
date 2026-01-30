import { defineDb, defineTable, column } from 'astro:db';

const Song = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    artist: column.text(),
    url: column.text(),
    dateAdded: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Song }
});
