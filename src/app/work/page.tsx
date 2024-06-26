export default function Work() {
  return (
    <div className="work ">
      <div>
        <h1 className="mb-8 text-2xl font-medium tracking-tighter ">my work</h1>
        <p className="text-gray-300">
          On a mission to build products developers love, and along the way,
          teach the next generation of developers. Here&apos;s a summary of my work
          so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>

        
      </div>
      <div>
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Vercel</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm ">
          VP of Product
        </p>
        <p className="my-4">
          I joined <a href="https://vercel.com/home">Vercel</a> early to grow{" "}
          <a href="https://nextjs.org">Next.js</a> and our developer community.
          I built our Developer Relations team to teach our community about our
          products.
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-2">
            In 2021, I was promoted to Director of DevRel. We{" "}
            <a href="https://twitter.com/kelseyhightower/status/1105985400110112768">
              translated customer pain
            </a>{" "}
            back into the product roadmap. We spoke at{" "}
            <a href="/blog/nextjs-conf-2022-recap">conferences</a>, wrote blog
            posts, and created videos. We built open-source examples and
            contributed back to the product.
          </li>
          <li className="mb-2">
            In 2022, I was promoted to VP of Developer Experience, now also
            leading our product documentation team. My team created a{" "}
            <a href="https://nextjs.org/learn">new free course</a> to teach
            Next.js, which had 17 million page views that year.{" "}
            <a href="https://twitter.com/leeerob/status/1608900031859527682">
              I shipped.
            </a>{" "}
            I partnered with our open-source community, collaborating with
            frameworks like{" "}
            <a href="https://vercel.com/docs/frameworks/nuxt">Nuxt</a> and{" "}
            <a href="https://astro.build/blog/vercel-official-hosting-partner/">
              Astro
            </a>{" "}
            and sponsoring individuals and projects.
          </li>
          <li className="mb-2">
            In 2023, I was promoted to VP of Product, now also leading Product
            Management.
          </li>
        </ul>
      </div>
    </div>
  );
}