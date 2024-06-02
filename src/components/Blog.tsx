import Image from "next/image";

export default function Blog() {
  return (
    <div>
      <div className="w-full max-h-[150px] flex flex-row my-6">
        <div className="flex-[2]">
          <h1 className="mb-2">What is Playwright?</h1>
          <p  className="text-gray-300">
            Playwright is a Node.js library made for browser automation. It is
            free, open-source and supported by Microsoft. Some of the team
            members used to work for google at the different automation tool
            called Puppeteer.
          </p>
        </div>
      <div className="flex-1 flex justify-end">
        <Image
          src={"/playwright.9fd738f6.png"}
          alt="playwright"
           width="0"
    height="0"
    sizes="100vw"
    className="w-auto h-full"
        />
      </div>
    </div>
    </div>
  );
}