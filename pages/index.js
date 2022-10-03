import { allPosts as posts } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps() {
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div className="mt-12">
      {posts.map((post, index) => (
        <Link href={post.url} passHref key={index}>
          <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-gray-300 mb-3 cursor-pointer max-w-xl">
            <div className="flex flex-wrap g-0">
              <div className="md:w-2/3 pr-4 pl-3">
                <div className="flex-auto pt-6">
                  <h5 className="mb-3 font-semibold text-xl">{post.title}</h5>
                  <p className="mb-0">A post about stuff</p>
                  <p className="mb-0">
                    <small className="text-gray-700">Oct 2nd</small>
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 pl-4 m-auto">
                <Image
                  src={post.image}
                  className="max-w-full h-auto mt-1 rounded-start"
                  alt="thumbnail"
                  width={500}
                  height={400}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
