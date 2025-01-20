import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-[2rem] text-center mt-8">Blog webside</h1>
      <div className="text-center underline text-blue-700 ">
        <Link href='/posts'>view post</Link> 
      </div>
    </>
  );
}
