export default function Nav() {
  return (
    <nav className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-end relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            <a
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
              href="/"
            >
              home
            </a>
            <a
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
              href="/work"
            >
              work
            </a>
            <a
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
              href="/project"
            >
              project
            </a>
            <a
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
              href="/blog"
            >
              blog
            </a>
            <a
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
              href="/contact"
            >
              contact
            </a>
          </div>
        </nav>
      </div>
    </nav>
  );
}