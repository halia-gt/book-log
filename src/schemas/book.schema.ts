import joi from "joi";

const bookSchema: joi.ObjectSchema<any> = joi.object({
    id: joi.number().integer(),
    title: joi.string().required(),
    author: joi.string().required(),
    pages: joi.number().integer().min(1).required(),
    rating: joi.number(),
    genre: joi.string().required(),
    series: joi.boolean().required(),
    format: joi.string().valid("eBook", "Physical", "Manga", "Audiobook").required(),
    date_started: joi.date().required(),
    date_finished: joi.date().min(joi.ref("date_started"))
});

const finishedBookSchema = joi.object({
    rating: joi.number().required(),
    date_finished: joi.date()
});

export { bookSchema, finishedBookSchema };