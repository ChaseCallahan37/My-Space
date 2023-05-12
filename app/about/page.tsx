export const dynamic = "force-static";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company",
};

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>Some stuff idk</p>
    </main>
  );
}
