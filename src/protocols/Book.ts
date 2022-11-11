export type Book = {
    id?: number,
    title: string,
    author: string,
    pages: number,
    rating?: number,
    genre: string,
    series: boolean,
    format: string,
    date_started: Date,
    date_finished?: Date
};

export type Author = {
    id: number,
    name: string
};

export type finishedBook = Pick<Book, "rating" | "date_finished">;