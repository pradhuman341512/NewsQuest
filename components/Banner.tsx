import Image from "next/image"
import bannerImg from "@/public/Images/Ghibli.jpeg"
import { Button } from "./ui/button"
export const Banner = () => {
  return (
    <section className=" flex items-center justify-center mt-24  ">
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
                   <h1 className="text-4xl font-bold text-gray-950">Artificial Intelligence</h1>  
                   <h2 className="text-2xl font-samibold text-gray-800">OpenAI pulls free GPT-4o image generator after one day</h2>
                   <p>OpenAI has pulled its upgraded image generation feature, powered by
                     the advanced GPT-4o reasoning model, from the free tier of ChatGPT.
                       The decision comes just a day after the update was launched,
                        following an unforeseen surge in users creating images in the 
                        distinctive style of renowned Japanese animation house, Studio Ghibli.
                        The update, which promised to deliver enhanced realism in both 
                        AI-generated images and text, was intended to showcase the capabilities of GPT-4o. 
                    </p>
                    <Button variant="default">Read More</Button>
            </div>
        </div>
    </section>
  )
}
