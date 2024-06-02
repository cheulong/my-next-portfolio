import Blog from "@/components/Blog";

export default function Blogs() {
  return (
    <div className="hero flex flex-row">
    <div className="flex-1 ">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter ">
        blog
      </h1>
      <Blog/>
      <Blog/>
      </div>
      </div>
  );
}