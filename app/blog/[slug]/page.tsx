//Metadata is exported at the top
export const revalidate = 420;

import Post from "@/interfaces/Post";

interface Props {
  params: { slug: string };
}

//Finds all the dynamic data, in this case, the slugs is what
//this dynamic route is based off of and it will search for all
//possible slugs that it needs to find. It is alos a good idea
//to implement incremental static regeneration so that the data
//is not stale and can rebuild the pages if they do change
export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: Props) {
  //Within server components, you must use fully qualified URLs not relative URLs
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug)!;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
