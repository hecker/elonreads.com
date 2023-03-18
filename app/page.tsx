import { queryBuilder } from "app/api/books";
import Image from "next/image";
import Link from "next/link";

function ElonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="64px"
      height="64px"
    >
      <path
        fill="#afafbc"
        d="M83.1,97.2C78.3,105.5,74.3,114,64,114c-10.3,0-14.3-8.5-19.1-16.8l-0.8-1.7c-16.8,4.6-33.4,5.9-34.9,26.2 c-0.1,1.7,1.2,3.3,3,3.3H50l14-11l14,11l41,0c0-23.5-17.4-24.6-35.1-29.5L83.1,97.2z"
      />
      <path
        fill="#ead063"
        d="M64,83L64,83c-20,0-40,6-40,25v0c0,1.7,1.3,3,3,3h74c1.7,0,3-1.3,3-3v0C104,89,84,83,64,83z"
      />
      <path
        fill="#444b54"
        d="M105.2,98.3C100.3,86.6,85.9,80,64,80c-21.9,0-36.3,6.6-41.2,18.3c-5.6,2.1-10.3,5.1-13.4,10 c-0.9,1.4-0.4,3.3,1,4.1c1.4,0.9,3.3,0.4,4.1-1c1.5-2.5,3.8-4.3,6.6-5.8c-0.1,0.8-0.1,1.5-0.1,2.3c0,1.7,1.3,3,3,3s3-1.3,3-3 c0-19.9,25.9-22,37-22s37,2.1,37,22c0,1.7,1.3,3,3,3s3-1.3,3-3c0-0.8,0-1.6-0.1-2.3c5.9,3.1,9.1,7.7,9.1,16.3c0,1.7,1.3,3,3,3 s3-1.3,3-3C122,108.1,114.6,102,105.2,98.3z"
      />
      <path
        fill="#242426"
        d="M47,122l0-22.5c0-9.5,7.8-17.6,17.3-17.4C73.5,82.2,81,89.7,81,99v23c0,1.7-1.3,3-3,3H50 C48.3,125,47,123.7,47,122z"
      />
      <path
        fill="#444b54"
        d="M81,76c-1.7,0-3,1.3-3,3v5.7c-3.6-3.5-8.6-5.7-14-5.7s-10.4,2.2-14,5.7V79c0-1.7-1.3-3-3-3s-3,1.3-3,3v40	c0,1.7,1.3,3,3,3s3-1.3,3-3V99c0-7.7,6.3-14,14-14s14,6.3,14,14v20c0,1.7,1.3,3,3,3s3-1.3,3-3V79C84,77.3,82.7,76,81,76z"
      />
      <path
        fill="#f9ded4"
        d="M64,104c-7.7,0-14-3.3-14-11V70h28v23C78,100.7,71.7,104,64,104z"
      />
      <path
        fill="#f9ded4"
        d="M64,89c-25.7,0-27-14.6-27-20l-2-32C35,19.4,46.4,5,64,5c17.6,0,29,14.4,29,32l-2,32C91,74.5,90.7,89,64,89z"
      />
      <path
        fill="#d8ac9e"
        d="M70.2,75.7c-0.5,0-1-0.1-1.5-0.4c-3.4-1.9-6.3-1.9-9.2-0.1c-1.4,0.9-3.3,0.5-4.1-1c-0.9-1.4-0.5-3.3,1-4.1 c4.7-2.9,10-3,15.3,0c1.5,0.8,2,2.6,1.2,4.1C72.3,75.1,71.3,75.7,70.2,75.7z"
      />
      <path
        fill="#444b54"
        d="M64,92C64,92,64,92,64,92C63.9,92,63.9,92,64,92c-9.8,0-20.6-5.2-25.4-10.2c-1.7-1.8-2.4-5.2-3.2-10.6 c-0.1-1-0.3-1.9-0.4-2.7c-0.3-1.6,0.8-3.2,2.4-3.5c1.6-0.3,3.2,0.8,3.5,2.4c0.1,0.8,0.3,1.8,0.4,2.8c0.3,2.2,0.9,6.4,1.6,7.4 c3.5,3.5,12.7,8.3,21,8.3c8.4,0,17.6-4.8,21-8.3c0.6-1,1.2-5.1,1.6-7.4c0.1-1,0.3-2,0.4-2.8c0.3-1.6,1.8-2.7,3.5-2.4 c1.6,0.3,2.7,1.8,2.4,3.5c-0.1,0.8-0.3,1.7-0.4,2.7c-0.8,5.4-1.4,8.8-3.2,10.6C84.5,86.8,73.7,92,64,92C64,92,64,92,64,92z"
      />
      <path
        fill="#444b54"
        d="M89.3,12.4C83.5,5.7,74.5,2,64,2c-8.2,0-11.5,0.8-13.1,1.3c-0.1-0.1-0.3-0.2-0.4-0.3c-0.4-0.4-0.9-0.8-1.6-1.3	c-1.3-1.1-3.2-0.9-4.2,0.4c-1.1,1.3-0.9,3.2,0.4,4.2c0.3,0.2,0.5,0.4,0.8,0.6c-0.5,0.3-0.9,0.6-1.4,0.9c-1.3-0.2-3-0.7-5.4-1.6	c-1.5-0.6-3.3,0.2-3.9,1.8c-0.6,1.6,0.2,3.3,1.8,3.9c0.7,0.3,1.3,0.5,2,0.7c-0.6,0.7-1.3,1.4-1.9,2.1c-4.1,5.3-7.7,14.4-5,27.9	c0.3,1.7,1,6.8,1,6.8c0.2,1.6,1.8,2.8,3.4,2.5c1.6-0.2,2.8-1.8,2.5-3.4c0,0-0.8-4.6-1-7.6c-0.4-6.9,1.3-12.8,4.2-17.2	c4.6-7,8.6-6.5,15.2-6.1c2,0.1,4.2,0.3,6.7,0.3c2.3,0,4.4-0.2,6.2-0.3c7.2-0.5,12-1.3,17.4,10.6c1.9,4.2,2.6,9,2.4,13.5	c-0.1,2.1-1,8.3-1,8.3c-0.2,1.6,1,3.1,2.6,3.3c0.1,0,0.2,0,0.4,0c1.5,0,2.8-1.1,3-2.6c0,0,0.7-6.3,1-8.4	C97.6,29.9,95.5,19.6,89.3,12.4z"
      />
      <path
        fill="#d8ac9e"
        d="M58,48c0,2.2-1.8,1-4,1s-4,1.2-4-1s1.8-4,4-4S58,45.8,58,48z"
      />
      <g>
        <path
          fill="#d8ac9e"
          d="M78,48c0,2.2-1.8,1-4,1s-4,1.2-4-1s1.8-4,4-4S78,45.8,78,48z"
        />
      </g>
    </svg>
  );
}

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
      "year",
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
            <div className="w-1/3">
              <Image
                src={book.cover}
                alt="Placeholder Image"
                width={1653}
                height={2560}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-2/3 px-6 py-4">
              <h2 className="text-2xl font-bold mb-2">{book.name}</h2>
              <p className="text-gray-700 text-base">{book.description}</p>
            </div>
          </div>
        </div>

        // <div
        //   className="border border-gray-300 rounded-lg p-4 w-full max-w-md mb-4 flex"
        //   key={book.id}
        // >
        //   <div className="w-24 h-32 mr-4">
        //     <Image
        //       src="/images/test.jpg"
        //       alt="Book cover"
        //       width={96}
        //       height={128}
        //     />
        //   </div>
        //   <div className="flex-1 flex flex-col justify-start">
        //     <h2 className="text-lg font-bold mb-2">{book.name}</h2>
        //     <p className="text-base mb-2">{book.description}</p>
        //     <a
        //       href={book.amazon ?? "#"}
        //       target="_blank"
        //       className="text-blue-600 hover:text-blue-800 font-medium mb-4"
        //     >
        //       Buy on Amazon &rarr;
        //     </a>
        //   </div>
        //   <div className="flex flex-col items-start justify-start border-l pl-4">
        //     <div className="flex items-center">
        //       <div className="w-8 h-8 mr-2">
        //         <ElonIcon />
        //       </div>
        //       <p className="text-sm mb-2">{book.quote}</p>
        //     </div>
        //     <a
        //       href={book.source ?? "#"}
        //       target="_blank"
        //       className="text-blue-600 hover:text-blue-800 font-medium"
        //     >
        //       {book.source} ({book.year})
        //     </a>
        //   </div>
        // </div>
      ))}
    </section>
  );
}
