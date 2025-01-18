import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col min-h-screen items-center space-y-4 justify-center">
        <Image
          width={500}
          height={500}
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
        />

        <p className="text-blue-600 font-bold">404 Not Found</p>

        <p>Could not find requested resource</p>
        <p className="text-4xl font-bold">Whoops! That page doesn’t exist.</p>
        <Link className="hover:underline" href="/">Return Home</Link>
      </div>
    </div>
  );
}
