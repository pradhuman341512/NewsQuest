import Image from "next/image"
import bannerImg from "@/public/Images/banner.jpg"
export const Banner = () => {
  return (
    <section className=" flex items-center justify-center ">
        <div className=" bg-gray-200 rounded-md  grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center  gap-8">
            <div className="w-full h-auto">
            <Image
                src={bannerImg}
                width={500}
                height={500}
                alt="Picture of the author"
                placeholder="blur"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
                   <h1 className="text-4xl font-bold text-gray-950">Rajasthan</h1>  
                   <h2 className="text-2xl font-samibold text-gray-800">Culture of Rajasthan – Traditions, Festivals, Cuisine, Customs & More</h2>
                   <p>The culture of Rajasthan is rich and varied, with the people of the state having 
                        a strong sense of history and tradition. The land of Kings is a vibrant and colorful
                        state where tradition and culture go hand in hand.
                        The culture is a rich tapestry of traditions, customs, and beliefs. There is much to 
                        explore, from colorful festivals to delicious food. At Chokhi Dhani Indore– Hotels and 
                        Resorts, we are all about traditional culture.
                    </p>
            </div>
        </div>
    </section>
  )
}
