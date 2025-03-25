import Link from "next/link";

// Correct for `app/ai/page.js`
export default function CategoriesPage() {
    return (
      <div className="w-screen h-screen bg-white text-black">
        <h1>Welcome to the Categories Page!</h1>
         <ul className="flex items-center justify-center gap-6 ">
            <li className="bg-black text-white text-2xl">
                <Link href='/arts'>
                  Arts 
                </Link>
            </li>
            <li className="bg-black text-white text-2xl">

                <Link href='/politics'>
                  Politics 
                </Link>
            </li>
            <li className="bg-black text-white text-2xl">

                <Link href='/sports'>
                  Sports 
                </Link>
            </li>
            <li className="bg-black text-white text-2xl">

                <Link href='/Tv%shows'>
                  Tv & Shows 
                </Link>
            </li>
            <li className="bg-black text-white text-2xl">

                <Link href='/world'>
                  World 
                </Link>
            </li>
         </ul>

      </div>
    );
  }
  
  
  