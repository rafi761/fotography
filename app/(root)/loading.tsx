import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-1 flex flex-col gap-4 items-center">
        <Skeleton className="w-[250px] h-[250px] rounded-full bg-gray-700" />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <Skeleton className="w-[576px] h-[10px] rounded-full bg-gray-700" />
        <Skeleton className="w-[576px] h-[10px] rounded-full bg-gray-700" />
        <Skeleton className="w-[576px] h-[10px] rounded-full bg-gray-700" />
        <Skeleton className="w-[576px] h-[10px] rounded-full bg-gray-700" />
      </div>
    </div>
  )
}

export default loading