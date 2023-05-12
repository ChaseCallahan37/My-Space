import Post from "@/interfaces/Post";
import { getServerSession } from "next-auth";

const posts: Post[] = [
  {
    title: "10 Tips for Writing Clean JavaScript Code",
    content:
      "Learn the best practices for writing clean and maintainable JavaScript code.",
    slug: "tips-for-writing-clean-javascript-code",
  },
  {
    title: "How to Use the Spread Operator in JavaScript",
    content:
      "Discover the power of the spread operator in JavaScript and how it can simplify your code.",
    slug: "how-to-use-the-spread-operator-in-javascript",
  },
  {
    title: "Understanding Scope in JavaScript",
    content:
      "Learn about the different types of scope in JavaScript and how they affect your code.",
    slug: "understanding-scope-in-javascript",
  },
  {
    title: "5 Common JavaScript Mistakes to Avoid",
    content:
      "Avoid these common mistakes in your JavaScript code to improve its readability and maintainability.",
    slug: "common-javascript-mistakes-to-avoid",
  },
  {
    title: "How to Use Promises in JavaScript",
    content:
      "Learn how to use Promises to handle asynchronous code in JavaScript.",
    slug: "how-to-use-promises-in-javascript",
  },
  {
    title: "10 JavaScript Frameworks You Should Know",
    content:
      "Discover the top JavaScript frameworks that you should be familiar with as a web developer.",
    slug: "top-javascript-frameworks-you-should-know",
  },
  {
    title: "An Introduction to JavaScript Classes",
    content:
      "Get started with JavaScript classes and learn how to use them to create reusable code.",
    slug: "introduction-to-javascript-classes",
  },
];
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();

  return NextResponse.json(posts);
}
