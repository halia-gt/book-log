--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: books_formats; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.books_formats AS ENUM (
    'eBook',
    'Audiobook',
    'Physical',
    'Manga'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: authors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.authors (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);


--
-- Name: authors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.authors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: authors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.authors_id_seq OWNED BY public.authors.id;


--
-- Name: books; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    author_id integer,
    pages integer NOT NULL,
    rating numeric,
    genre character varying(20) NOT NULL,
    series boolean NOT NULL,
    format public.books_formats NOT NULL,
    date_started date NOT NULL,
    date_finished date,
    CONSTRAINT books_check CHECK ((date_finished >= date_started)),
    CONSTRAINT books_pages_check CHECK ((pages > 0)),
    CONSTRAINT books_rating_check CHECK (((rating >= (0)::numeric) AND (rating <= (5)::numeric)))
);


--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: authors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.authors ALTER COLUMN id SET DEFAULT nextval('public.authors_id_seq'::regclass);


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Data for Name: authors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.authors VALUES (1, 'Daniel Keyes');
INSERT INTO public.authors VALUES (2, 'T.J. Klune');
INSERT INTO public.authors VALUES (3, 'Sabaa Tahir');
INSERT INTO public.authors VALUES (4, 'Kelly Barnhill');
INSERT INTO public.authors VALUES (5, 'Agatha Christie');
INSERT INTO public.authors VALUES (6, 'Brandon Sanderson');
INSERT INTO public.authors VALUES (7, 'Taylor Jenkins Reid');
INSERT INTO public.authors VALUES (8, 'Fredrik Backman');
INSERT INTO public.authors VALUES (9, 'Maggie Stiefvater');
INSERT INTO public.authors VALUES (10, 'Oscar Wilde');
INSERT INTO public.authors VALUES (11, 'Rainbow Rowell');
INSERT INTO public.authors VALUES (12, 'Robin Hobb');
INSERT INTO public.authors VALUES (13, 'Alex Michaelides');
INSERT INTO public.authors VALUES (14, 'Erin Morgenstern');
INSERT INTO public.authors VALUES (15, 'Colleen Hoover');
INSERT INTO public.authors VALUES (16, 'M.L. Wang');
INSERT INTO public.authors VALUES (17, 'Leigh Bardugo');
INSERT INTO public.authors VALUES (18, 'Tatsuya Endo');
INSERT INTO public.authors VALUES (19, 'Neil Gaiman');
INSERT INTO public.authors VALUES (20, 'Kate Elizabeth Russell');
INSERT INTO public.authors VALUES (21, 'V.E. Schwab');
INSERT INTO public.authors VALUES (22, 'Laini Taylor');
INSERT INTO public.authors VALUES (23, 'J.R.R. Tolkien');
INSERT INTO public.authors VALUES (24, 'Madeline Miller');
INSERT INTO public.authors VALUES (25, 'Gabriel García Márquez');
INSERT INTO public.authors VALUES (26, 'Author Teste');


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.books VALUES (46, 'Crooked Kingdom', 17, 561, NULL, 'Fantasy', true, 'Physical', '2022-11-02', NULL);
INSERT INTO public.books VALUES (47, 'The Winners', 8, 671, NULL, 'Literary Fiction', true, 'Audiobook', '2022-11-04', NULL);
INSERT INTO public.books VALUES (48, 'One Hundred Years of Solitude', 25, 417, 2, 'Historical', false, 'eBook', '2022-07-24', '2022-08-28');
INSERT INTO public.books VALUES (1, 'Flowers for Algernon', 1, 278, 4, 'Sci-Fi', false, 'eBook', '2022-01-02', '2022-01-10');
INSERT INTO public.books VALUES (2, 'The House in the Cerulean Sea', 2, 394, 5, 'Fantasy', false, 'Audiobook', '2022-01-05', '2022-01-12');
INSERT INTO public.books VALUES (3, 'An Ember in the Ashes', 3, 446, 4, 'Fantasy', true, 'eBook', '2022-01-10', '2022-01-20');
INSERT INTO public.books VALUES (4, 'The Girl Who Drank the Moon', 4, 388, 4, 'Fantasy', false, 'Audiobook', '2022-01-13', '2022-01-22');
INSERT INTO public.books VALUES (5, 'Poirot Investigates', 5, 191, 2, 'Mystery', false, 'eBook', '2022-01-20', '2022-01-23');
INSERT INTO public.books VALUES (25, 'Siege and Storm', 17, 435, 2, 'Fantasy', true, 'Physical', '2022-04-20', '2022-04-30');
INSERT INTO public.books VALUES (6, 'The Final Empire', 6, 541, 5, 'Fantasy', true, 'eBook', '2022-01-22', '2022-02-03');
INSERT INTO public.books VALUES (26, 'Spy x Family, Vol. 8', 18, 216, 5, 'Humor', true, 'Manga', '2022-04-26', '2022-04-26');
INSERT INTO public.books VALUES (7, 'The Seven Husbands of Evelyn Hugo', 7, 389, 5, 'Historical', false, 'Audiobook', '2022-01-24', '2022-01-29');
INSERT INTO public.books VALUES (8, 'Beartown', 8, 432, 5, 'Literary Fiction', true, 'Audiobook', '2022-01-31', '2022-02-09');
INSERT INTO public.books VALUES (9, 'The Raven Boys', 9, 409, 3, 'Fantasy', true, 'eBook', '2022-02-03', '2022-02-09');
INSERT INTO public.books VALUES (10, 'The Picture of Dorian Gray', 10, 272, 3, 'Horror', false, 'Audiobook', '2022-02-10', '2022-02-15');
INSERT INTO public.books VALUES (11, 'The Well of Ascension', 6, 590, 5, 'Fantasy', true, 'eBook', '2022-02-10', '2022-02-23');
INSERT INTO public.books VALUES (27, 'Ruin and Rising', 17, 422, 3, 'Fantasy', true, 'Physical', '2022-04-30', '2022-05-02');
INSERT INTO public.books VALUES (28, 'A Sky Beyond the Storm', 3, 516, 4, 'Fantasy', true, 'Audiobook', '2022-04-21', '2022-04-29');
INSERT INTO public.books VALUES (12, 'Carry On', 11, 522, 4, 'Fantasy', true, 'Audiobook', '2022-02-15', '2022-02-19');
INSERT INTO public.books VALUES (13, 'And Every Morning the Way Home Gets Longer and Longer', 8, 97, 5, 'Literary Fiction', false, 'Audiobook', '2022-02-19', '2022-02-19');
INSERT INTO public.books VALUES (14, 'A Torch Against the Night', 3, 452, 4, 'Fantasy', true, 'Audiobook', '2022-02-21', '2022-03-01');
INSERT INTO public.books VALUES (15, 'The Hero of Ages', 6, 572, 5, 'Fantasy', true, 'eBook', '2022-02-24', '2022-03-16');
INSERT INTO public.books VALUES (16, 'Assassin''s Apprentice', 12, 435, 4.5, 'Fantasy', true, 'Audiobook', '2022-03-03', '2022-04-04');
INSERT INTO public.books VALUES (17, 'The Silent Patient', 13, 325, 4, 'Mystery', false, 'Physical', '2022-03-06', '2022-03-06');
INSERT INTO public.books VALUES (18, 'The Night Circus', 14, 387, 4, 'Fantasy', false, 'Physical', '2022-03-17', '2022-03-23');
INSERT INTO public.books VALUES (19, 'Ugly Love', 15, 337, 4, 'Romance', false, 'Physical', '2022-03-23', '2022-03-27');
INSERT INTO public.books VALUES (20, 'It Ends with Us', 15, 385, 4.5, 'Romance', true, 'Physical', '2022-03-27', '2022-03-31');
INSERT INTO public.books VALUES (21, 'The Eleventh Metal', 6, 21, 3, 'Fantasy', true, 'eBook', '2022-03-28', '2022-03-28');
INSERT INTO public.books VALUES (22, 'The Sword of Kaigen', 16, 559, 5, 'Fantasy', false, 'eBook', '2022-04-01', '2022-06-07');
INSERT INTO public.books VALUES (24, 'Shadow and Bone', 17, 358, 2, 'Fantasy', true, 'Physical', '2022-04-17', '2022-04-19');
INSERT INTO public.books VALUES (29, 'Norse Mythology', 19, 301, 2, 'Fantasy', false, 'Audiobook', '2022-05-03', '2022-05-04');
INSERT INTO public.books VALUES (30, 'Us Against You', 8, 448, 5, 'Literary Fiction', true, 'Audiobook', '2022-05-05', '2022-05-09');
INSERT INTO public.books VALUES (31, 'My Dark Vanessa', 20, 373, 4, 'Literary Fiction', false, 'Audiobook', '2022-05-09', '2022-05-17');
INSERT INTO public.books VALUES (32, 'Novembro, 9', 15, 369, 3, 'Romance', false, 'Physical', '2022-05-17', '2022-05-20');
INSERT INTO public.books VALUES (33, 'The Invisible Life of Addie LaRue', 21, 444, 4, 'Fantasy', false, 'Audiobook', '2022-05-18', '2022-05-28');
INSERT INTO public.books VALUES (34, 'Verity', 15, 336, 2, 'Mystery', false, 'Physical', '2022-05-20', '2022-05-21');
INSERT INTO public.books VALUES (35, 'A Man Called Ove', 8, 337, 5, 'Literary Fiction', false, 'Audiobook', '2022-05-28', '2022-05-29');
INSERT INTO public.books VALUES (36, 'Royal Assassin', 12, 675, 4, 'Fantasy', true, 'Audiobook', '2022-05-29', '2022-07-12');
INSERT INTO public.books VALUES (37, 'Strange the Dreamer', 22, 544, 4, 'Fantasy', true, 'eBook', '2022-06-07', '2022-07-24');
INSERT INTO public.books VALUES (38, 'Anxious People', 8, 336, 4, 'Literary Fiction', false, 'Audiobook', '2022-07-13', '2022-07-14');
INSERT INTO public.books VALUES (39, 'Spy x Family, Vol. 9', 18, 208, 5, 'Humor', true, 'Manga', '2022-07-24', '2022-07-24');
INSERT INTO public.books VALUES (41, 'A Conjuring of Light', 21, 624, 4.5, 'Fantasy', true, 'Audiobook', '2022-08-19', '2022-09-20');
INSERT INTO public.books VALUES (42, 'The Return of the King', 23, 595, 3, 'Fantasy', true, 'eBook', '2022-08-29', '2022-10-28');
INSERT INTO public.books VALUES (43, 'The Song of Achilles', 24, 378, 4, 'Fantasy', false, 'Audiobook', '2022-09-21', '2022-10-25');
INSERT INTO public.books VALUES (44, 'It Starts with Us', 15, 336, 2, 'Romance', true, 'Audiobook', '2022-10-26', '2022-11-03');
INSERT INTO public.books VALUES (45, 'Six of Crows', 17, 465, 4, 'Fantasy', true, 'Physical', '2022-10-29', '2022-11-02');
INSERT INTO public.books VALUES (40, 'A Gathering of Shadows', 21, 512, 4, 'Fantasy', true, 'Audiobook', '2022-08-11', '2022-08-18');
INSERT INTO public.books VALUES (23, 'A Reaper at the Gates', 3, 458, 4, 'Fantasy', true, 'Audiobook', '2022-04-04', '2022-04-20');


--
-- Name: authors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.authors_id_seq', 26, true);


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.books_id_seq', 50, true);


--
-- Name: authors authors_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.authors
    ADD CONSTRAINT authors_name_key UNIQUE (name);


--
-- Name: authors authors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.authors
    ADD CONSTRAINT authors_pkey PRIMARY KEY (id);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: books books_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.authors(id);


--
-- PostgreSQL database dump complete
--

