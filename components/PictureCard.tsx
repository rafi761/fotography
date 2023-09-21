import { Eye } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"


interface Props {
    id: string,
    title: string,
    image: string,
    downloadNumber: number
}

const PictureCard = ({id, title, image, downloadNumber}: Props) => {
  return (
    <Card className="w-56 h-80 relative">
        <CardHeader className="w-full h-56 p-0">
            <Image 
                src={image}
                alt="title"
                width={250}
                height={80}
                className="object-cover w-full h-full"
            />
        </CardHeader>
        <CardContent className="px-2 py-1">
            <p className="bg-gradient-to-r from-[#CCC8AA] to-[#7D7C7C] bg-clip-text text-transparent text-lg font-semibold truncate">{title}</p>
            <div className="flex gap-2 items-center absolute bottom-0 right-2">
                <Eye className="w-6 h-8 text-[#7D7C7C]"/>
                <p className="text-sm text-[#7D7C7C] font-semibold">{downloadNumber}</p>
            </div>
        </CardContent>
    </Card>
  )
}

export default PictureCard