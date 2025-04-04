import Image from "next/image"
import bannerImg from "@/public/Images/Ghibli.jpeg"
import { Button } from "./ui/button"
export const Banner = () => {
  return (
    <section className="dark:bg-slate-800 dark:text-white bg-gray-100 py-8 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 sm:px-6 lg:px-8 py-5">
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
            <div className="flex flex-col items-center justify-center gap-6 p-4">
                   <h1 className="text-4xl font-bold ">Artificial Intelligence</h1>  
                   <h2 className="text-2xl font-samibold ">OpenAI pulls free GPT-4o image generator after one day</h2>
                   <p className="" >OpenAI has pulled its upgraded image generation feature, powered by
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
