import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero flex flex-row">
      <div className="flex-1 ">
        <h1 className="mb-8 text-2xl font-medium tracking-tighter ">
          hi, I&apos;m Cheulong.
        </h1>
        <p className="text-gray-300">
          I&apos;m a frontend developer and AI enthusiast. Currently, I am working as
          the software engineer at{" "}
          <a href="https://www.linkedin.com/company/linkedin/" target="_blank">
            Alstom
          </a>
          .
        </p>
        <br />
        <p className="text-gray-300">
          I always passionaly learn something new everydays. I prepare myself to
          face the challenge and upgrade my skill and stay at the cutting edge
          of full stack development.
        </p>
        <div className="mt-4">
          <Link href="https://drive.google.com/uc?export=download&id=1bWuWK8pAYq1BiWb2CtWENgHjWeGymy86" className="mr-4 underline underline-offset-4">
         resume
          </Link>
          <Link href="/about" className="underline underline-offset-4">
            about
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <img src="" alt="" />
      </div>
    </div>
  );
}