import Link from "next/link"
import { NewsArticle } from "./type/news"
import Image from "next/image"
import { Button } from "./ui/button"

interface NewsCardProps{
    item:NewsArticle
}
export const NewsCard = ({item}:NewsCardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-sm ">
        <Link href={`/ai/${item.source.id}`}>
        <Image 
        src={item?.urlToImage}
        alt={item?.title}
        width={1000}
        height={1000} 
        className="mb-5 md:h-56 w-[520px] h-[200px]  rounded hover:scale-105 cursor-pointer transition-all duration-300"
        />
        </Link>
        <h2 className="text-xl font-semibold">
  {item?.title ? item.title.substring(0, 65) : 'No Title Available'}
</h2>
<p className="mt-2">{item?.publishedAt} {item?.author}</p>
<p className="mt-2 mb-4">
  {item?.description ? item.description.substring(0, 100) : 'No Description Available'}...
</p>

    </div>
  )
}
