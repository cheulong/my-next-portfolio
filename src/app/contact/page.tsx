import Link from "next/link";

export default function Contact() {
  return (
    <div className="contact">
    <div className="flex-1 ">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter ">
        contact
      </h1>
   
      <div className="mt-4 flex flex-col space-y-2 ml-2">
        <Link href="https://drive.google.com/uc?export=download&id=1bWuWK8pAYq1BiWb2CtWENgHjWeGymy86" className="mr-4 underline underline-offset-4">
       email
        </Link>
        <Link href="/about" className="underline underline-offset-4">
          linkedin
        </Link>
      </div>
    </div>
    <div className="flex-1">
      <img src="" alt="" />
    </div>
  </div>
  );
}