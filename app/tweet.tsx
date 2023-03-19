import Image from "next/image";
import Link from "next/link";

interface TweetProps {
  text: string;
  source: string;
  date: string;
}

const Tweet: React.FC<TweetProps> = ({ text, source, date }) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center">
        <Link href={source}>
          <div className="mr-4">
            <Image
              src="/icons/elon.svg"
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </Link>
        <Link href={source}>
          <h2 className="font-bold text-lg" style={{ lineHeight: "1.2" }}>
            Elon Musk
          </h2>
          <h2 className="text-lg text-gray-500" style={{ lineHeight: "1.2" }}>
            @elonmusk
          </h2>
        </Link>
      </div>
      <p className="text-gray-700 my-2">{text}</p>
      <div className="text-gray-500 text-sm">
        Tweeted on{" "}
        {new Date(date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </div>
    </div>
  );
};

export default Tweet;
