import { queryBuilder } from "app/api/books";
import Image from "next/image";
import Link from "next/link";
import Tweet from "./tweet";

async function getBooks() {
  const data = await queryBuilder
    .selectFrom("books")
    .select([
      "id",
      "name",
      "cover",
      "description",
      "quote",
      "source",
      "date",
      "amazon",
    ])
    .execute();
  return data;
}

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let entries;
  try {
    const [booksRes] = await Promise.allSettled([getBooks()]);

    if (booksRes.status === "fulfilled" && booksRes.value[0]) {
      entries = booksRes.value;
    } else {
      console.error(booksRes);
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Elon Reads</h1>
      <p className="text-lg mb-8">
        📚🚀 A showcase of books that inspire Elon Musk.
      </p>

      {entries?.map((book) => (
        <div key={book.id} className="py-8">
          <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
            <div className="w-1/2 md:w-1/3">
              <Image
                src={book.cover}
                alt="Placeholder Image"
                width={1653}
                height={2560}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-1/2 md:w-2/3 px-6 py-4">
              <h2 className="text-2xl font-bold mb-2">{book.name}</h2>
              <p className="text-gray-700 text-base">{book.description}</p>
              <div className="divide-y divide-gray-400 md:divide-y-8"></div>
              {book.quote && book.source && book.date && (
                <div className="mt-8">
                  <Tweet
                    text={book.quote}
                    source={book.source}
                    date={book.date}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
