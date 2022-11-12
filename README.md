
# Book Log

A simple aplication to log the books you read.


## API documentation

#### Return all books

```http
  GET /books
```

| Params   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | Identification of the book |
| `title` | `string` | Title of the book |
| `author` | `string` | Author of the book |
| `pages` | `number` | Number of pages of the book |
| `rating` | `number` | Rating you give the book. `null` if not finished |
| `genre` | `string` | Main genre of the book |
| `series` | `boolean` | `true` if the book belongs to a series. `false` otherwise |
| `format` | `string` | Format you read the book ** |
| `date_started` | `Date` | Day you started reading the book |
| `date_finished` | `Date` | Day you finished reading the book. `null` if not finished |

** Options: `Physical`, `eBook`, `Audiobook` or `Manga`  

Expected return: 200

#### Add a book

```http
  POST /books
```

| Params   | Type       | Description                           |
| :---------- | :--------- | :------------------------------------------ |
| `title` | `string` | Title of the book |
| `author` | `string` | Author of the book |
| `pages` | `number` | Number of pages of the book |
| `rating` | `number` | Rating you give the book, between 0 and 5 ***|
| `genre` | `string` | Main genre of the book |
| `series` | `boolean` | `true` if the book belongs to a series. `false` otherwise |
| `format` | `string` | Format you read the book ** |
| `date_started` | `Date` | Day you started reading the book |
| `date_finished` | `Date` | Day you finished reading the book *** |

** Options: `Physical`, `eBook`, `Audiobook` or `Manga`  
*** Optional param  

Expected return: 201

#### Delete a book

```http
  DELETE /books/:id
```

Expected return: 204

#### Update a book

```http
  PUT /books/:id
```

Expected return: 202

#### Finish reading a book

```http
  POST /books/finished/:id
```

| Params   | Type       | Description                           |
| :---------- | :--------- | :------------------------------------------ |
| `rating` | `number` | Rating you give the book, between 0 and 5 |
| `date_finished` | `Date` | Day you finished reading the book |

Expected return: 202

#### Get basic reading status

```http
  GET /books/status
```

| Params   | Type       | Description                           |
| :---------- | :--------- | :------------------------------------------ |
| `total_books` | `number` | Number of books you read |
| `total_pages` | `number` | Number of pages read |
| `total_authors` | `number` | Number of unique authors you read |

Expected return: 200


## How to run

1. Clone this repository
2. Install dependencies
```bash
npm i
```
3. Create an `.env` file with a `DATABASE_URL` as in example
4. Create a local postgres database using the `dump.sql` file
5. Start the application on the root of the project
```bash
npm run dev
```
    
