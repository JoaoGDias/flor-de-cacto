import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center h-96 w-full">
        <div className="relative flex items-center justify-center h-[150px] w-[150px]">
            <Image src="/flor-de-cacto.png" alt="Logo da loja - flor de cacto" height={80} width={80} priority={true} className="object-contain height-[100px]" />
            <div className="absolute inset-0 border-4 border-solid rounded-full border-x-white border-y-[#97A27F] w-[150px] h-[150px] z-10 animate-spin"></div>
        </div>
    </div>
  )
}
