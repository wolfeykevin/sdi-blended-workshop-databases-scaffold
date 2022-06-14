/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    { id: 1, title: 'IT', pages: 1168, ISBN: '1501182099', published_date: 'September 15, 1986', genre_id: 1, publisher_id: 1, format_id: 1, cover_image: 'https://i.pinimg.com/originals/94/a6/a5/94a6a5b32c4f536b5402217a251a82b7.png' },
    { id: 2, title: 'Grapes of Wrath', pages: 464, ISBN: '0143039431', published_date: 'April 14, 1939', genre_id: 2, publisher_id: 2, format_id: 2, cover_image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/The_Grapes_of_Wrath_%281939_1st_ed_cover%29.jpg' },
    { id: 3, title: 'Dracula', pages: 756, ISBN: '1435159578', published_date: 'May 26, 1897', genre_id: 1, publisher_id: 3, format_id: 5, cover_image: 'https://i.pinimg.com/550x/44/22/c8/4422c82d4b60909d7a0b31d2b1d5073b.jpg' },
    { id: 4, title: 'Between Two Fires', pages: 432, ISBN: '1937007863', published_date: 'October 2, 2012', genre_id: 1, publisher_id: 4, format_id: 1, cover_image: 'https://i.imgur.com/LhQ0hcm.jpg' },
    { id: 5, title: 'Alice\'s Adventures in Wonderland', pages: 52, ISBN: '9780582534148', published_date: 'June 1865', genre_id: 12, publisher_id: 5, format_id: 2, cover_image: 'https://prodimage.images-bn.com/pimages/9781435166240_p2_v3_s550x406.jpg' },
    { id: 6, title: 'East of Eden', pages: 500, ISBN: '2183049451', published_date: 'April 6, 1955', genre_id: 11, publisher_id: 2, format_id: 2, cover_image: 'https://en.wikipedia.org/wiki/East_of_Eden_(novel)#/media/File:East_of_Eden_(1952_1st_ed_dust_jacket).jpg' },
    { id: 7, title: 'Library at Mount Char', pages: 400, ISBN: '0553418602', published_date: 'June 16, 2015', genre_id: 2, publisher_id: 7, format_id: 3, cover_image: 'https://en.wikipedia.org/wiki/File:The_Library_At_Mount_Char_book_cover.jpg' },
  ]);

  await knex('authors').del()
  await knex('authors').insert([
    { author_id: 1, first_name: 'Stephen', middle_name: '', last_name: 'King' },
    { author_id: 2, first_name: 'John', middle_name: '', last_name: 'Steinbeck' },
    { author_id: 3, first_name: 'Brahm', middle_name: '', last_name: 'Stoker' },
    { author_id: 4, first_name: 'Christopher', middle_name: '', last_name: 'Buehlman' },
    { author_id: 5, first_name: 'Lewis', middle_name: '', last_name: 'Carroll' },
    { author_id: 6, first_name: 'Scott', middle_name: '', last_name: 'Hawkins' },
  ]);

  await knex('authors_books').del()
  await knex('authors_books').insert([
    { book_id: 1, author_id: 1 },
    { book_id: 2, author_id: 2 },
    { book_id: 3, author_id: 3 },
    { book_id: 4, author_id: 4 },
    { book_id: 5, author_id: 5 },
    { book_id: 6, author_id: 2 },
    { book_id: 7, author_id: 7 },
  ]);

  await knex('publishers').del()
  await knex('publishers').insert([
    { publisher_id: 1, publisher_name: 'Scribner' },
    { publisher_id: 2, publisher_name: 'Penguin Books' },
    { publisher_id: 3, publisher_name: 'Archibald Constable and Company (UK)' },
    { publisher_id: 4, publisher_name: 'Ace' },
    { publisher_id: 5, publisher_name: 'Clarendon Press in Oxford' },
    { publisher_id: 6, publisher_name: 'Crown' },
  ]);

  await knex('genre').del()
  await knex('genre').insert([
    { genre_id: 1, genre: 'Horror' },
    { genre_id: 2, genre: 'Science Fiction' },
    { genre_id: 3, genre: 'Classics' },
    { genre_id: 4, genre: 'Biography' },
    { genre_id: 5, genre: 'Politics' },
    { genre_id: 6, genre: 'Reference' },
    { genre_id: 7, genre: 'Historical' },
    { genre_id: 8, genre: 'War' },
    { genre_id: 9, genre: 'Poetry' },
    { genre_id: 10, genre: 'Graphic Novel' },
    { genre_id: 11, genre: 'Historical Fiction' },
    { genre_id: 12, genre: 'Fantasy' },
  ]);

  await knex('book_genre').del()
  await knex('book_genre').insert([
    { genre_id: 1, book_id: 1 },
    { genre_id: 2, book_id: 2 },
    { genre_id: 1, book_id: 3 },
    { genre_id: 1, book_id: 4 },
    { genre_id: 3, book_id: 5 },
    { genre_id: 3, book_id: 6 },
    { genre_id: 1, book_id: 7 },
  ]);

  await knex('book_format').del()
  await knex('book_format').insert([
    { format_id: 1, format: 'Hardcover' },
    { format_id: 2, format: 'Soft cover' },
    { format_id: 3, format: 'EPUB' },
    { format_id: 4, format: 'MOBI' },
    { format_id: 5, format: 'Collectors Edition' },
    { format_id: 6, format: 'Audio Book' },
  ]);

  await knex('synopsis').del()
  await knex('synopsis').insert([
    { synopsis_id: 1, synopsis: 'Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real.' },
    { synopsis_id: 2, synopsis: 'Set during the Great Depression, the novel focuses on the Joads, a poor family of tenant farmers driven from their Oklahoma home by drought, economic hardship, agricultural industry changes, and bank foreclosures forcing tenant farmers out of work.' },
    { synopsis_id: 3, synopsis: 'Alice, a child, discovers the nonsensical and nightmarish world of adults. Her painful growing and shrinking experiences are a symbol of puberty and the confusing search for a new identity.' },
    { synopsis_id: 4, synopsis: 'The year is 1348. Thomas, a disgraced knight, has found a young girl alone in a dead Norman village. An orphan of the Black Death, and an almost unnerving picture of innocence, she tells Thomas that plague is only part of a larger cataclysm—that the fallen angels under Lucifer are rising in a second war on heaven, and that the world of men has fallen behind the lines of conflict.' },
    { synopsis_id: 5, synopsis: "Set in the rich farmland of California's Salinas Valley, this sprawling and often brutal novel follows the intertwined destinies of two families—the Trasks and the Hamiltons—whose generations helplessly reenact the fall of Adam and Eve and the poisonous rivalry of Cain and Abel" },
    { synopsis_id: 6, synopsis: 'Dracula comprises journal entries, letters, and telegrams written by the main characters. It begins with Jonathan Harker, a young English lawyer, as he travels to Transylvania. Harker plans to meet with Count Dracula, a client of his firm, in order to finalize a property transaction.' },
    { synopsis_id: 7, synopsis: 'In the years since then, Carolyn hasn\'t had a chance to get out much. Instead, she and her adopted siblings have been raised according to Father\'s ancient customs. They\'ve studied the books in his Library and learned some of the secrets of his power. And sometimes, they\'ve wondered if their cruel tutor might secretly be God. Now, Father is missing—perhaps even dead—and the Library that holds his secrets stands unguarded.' },
  ]);

  await knex('book_synopsis').del()
  await knex('book_synopsis').insert([
    { synopsis_id: 1, book_id: 1 },
    { synopsis_id: 2, book_id: 2 },
    { synopsis_id: 3, book_id: 5 },
    { synopsis_id: 4, book_id: 4 },
    { synopsis_id: 5, book_id: 6 },
    { synopsis_id: 6, book_id: 3 },
    { synopsis_id: 7, book_id: 7 },
  ]);

  // await knex('cover_image').del()
  // await knex('cover_image').insert([
  //   { cover_id: 1, book_id: 1 },
  // ]);
};