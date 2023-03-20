import { Generated, Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

interface BooksTable {
  id: Generated<number>;
  name: string;
  description: string;
  cover: string;
  quote: string;
  source: string | null;
  date: string;
  amazon: string | null;
}

export interface Book {
  id: number;
  name: string;
  description: string;
  cover: string;
  quote: string;
  source: string | null;
  date: string;
  amazon: string | null;
}

interface Database {
  books: BooksTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
