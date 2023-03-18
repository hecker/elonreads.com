import { queryBuilder } from "app/api/books";
import Image from "next/image";

async function getBooks() {
  const data = await queryBuilder
    .selectFrom("books")
    .select(["id", "name", "description", "quote", "source", "year", "amazon"])
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
        Discover the books that inspire Elon Musk's creativity and innovation.
      </p>

      {entries?.map((book) => (
        <div
          className="border border-gray-300 rounded-lg p-4 w-full max-w-md mb-4"
          key={book.id}
        >
          <div className="flex flex-row items-center">
            <div className="w-24 h-32 mr-4">
              <Image
                src="/images/test.jpg"
                alt="Book cover"
                width={96}
                height={128}
              />
            </div>
            <div className="flex flex-col justify-start">
              <h2 className="text-lg font-bold mb-2">{book.name}</h2>
              <p className="text-base mb-2">{book.description}</p>
              <p className="text-sm font-medium mb-2">Quote: {book.quote}</p>
              <p className="text-sm font-medium mb-2">Source: {book.source}</p>
              <p className="text-sm font-medium mb-2">Year: {book.year}</p>
              <a
                href={book.amazon ?? "#"}
                target="_blank"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Buy on Amazon &rarr;
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
