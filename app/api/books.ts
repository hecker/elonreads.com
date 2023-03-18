import { Generated, Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

interface BooksTable {
  id: Generated<number>;
  name: string;
  description: string;
  quote: string | null;
  source: string | null;
  year: string | null;
  amazon: string | null;
}

export interface Book {
  id: number;
  name: string;
  description: string;
  quote: string | null;
  source: string | null;
  year: string | null;
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

export async function fetchBooks(): Promise<Book[]> {
  console.log("fetchBooks");
  try {
    const result = await queryBuilder
      .selectFrom("books")
      .select([
        "id",
        "name",
        "description",
        "quote",
        "source",
        "year",
        "amazon",
      ])
      .execute();
    const books = result.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      quote: row.quote,
      source: row.source,
      year: row.year,
      amazon: row.amazon,
    }));
    console.log("Books:", books);
    return books;
  } catch (err) {
    console.error("Failed to fetch books:", err);
    throw err;
  }
}
