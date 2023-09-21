import Category from "@/components/Category";
import SearchForm from "@/components/SearchForm";
import { Instagram, Twitter, Facebook } from "lucide-react"
import { category } from "@/constants";

import Image from "next/image";
import { getPictures, getPicturesPlaylist } from "@/sanity/actions";
import PictureCard from "@/components/PictureCard";
import Header from "@/components/Header";

export const revalidate = 900

interface Props {
  searchParams: { [key: string]: string | undefined }
}

export default async function Home({searchParams}: Props) {
    const pictures = await getPictures({
      query: searchParams?.query || "",
      category: searchParams?.category || "",
      page: "1"
    })

    
    const picturesPlaylist = await getPicturesPlaylist()

    return (
      <main>
        <section className="flex w-full max-md:flex-col md:items-center">
          <div className="flex-1 w-full">
            <Image 
              src="/assets/dzawin-avatar.jpg"
              alt="Dzawin Nur"
              width={760}
              height={760}
              className="object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center gap-8 p-8">
            <p className="text-[#7D7C7C] text-6xl opacity-25">{`Hello! I'm`}</p>
            <h1 className="text-4xl text-[#191717] font-semibold">Dzawin Nur <span className="text-[#CCC8AA] ">A Traveller & Photographer.</span> Markicabs</h1>
            <p className="text-[#7D7C7C] text-xl">Like to explore mountain and take a photo for every beautifull moments </p>
            <div className="flex items-center gap-5">
              <Instagram className="w-8 h-8 text-[#7D7C7C]"/>
              <Facebook className="w-8 h-8 text-[#7D7C7C]"/>
              <Twitter className="w-8 h-8 text-[#7D7C7C]"/>
            </div>
          </div>
        </section> 

        <SearchForm />

        <Category category={category}/>

        {(searchParams?.query || searchParams?.category) && (
          <section className="px-8 py-8 flex flex-col gap-5">
            <Header title="Pictures" query={searchParams?.query || ""} category={searchParams?.category} />
            {pictures?.length > 0 ? (
              <div className="w-fit flex gap-6 flex-wrap">
                {pictures.map((picture: any) => (
                  <PictureCard key={picture._id} title={picture.title} id={picture._id} image={picture.image} downloadNumber={picture.views}/>
                ))}
              </div>
            ): <p className="text-lg text-[#7D7C7C] font-semibold italic">
                No pictures found
              </p> }
          </section>
        )}

        {(!searchParams?.query && !searchParams.category) && (
          <>
            {picturesPlaylist.map((item: any) => (
              <section className="px-8 py-8 flex flex-col gap-5" key={item._id}>
                <h1 className="text-3xl text-[#7D7C7C] font-semibold italic">{item.title}</h1>
                <div className="w-fit flex gap-6 flex-wrap">
                  {item.pictures.map((picture: any) => (
                    <PictureCard key={picture._id} title={picture.title} id={picture._id} image={picture.image} downloadNumber={picture.views}/>
                  ))}
                </div>
              </section>
            ))}
          </>
        )}
      </main>   
    )
}
