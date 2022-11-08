export type Book = {
    id?: number,
    title: string,
    pages: number,
    rating: number,
    genre: string,
    series: boolean,
    format: string,
    date_started: Date,
    date_finished?: Date
}