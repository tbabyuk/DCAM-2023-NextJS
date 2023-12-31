import Image from "next/image"
import Link from "next/link"



export const InstrumentCard = ({instrument, imageSrc, url}) => {

    return (
        <div className="w-[250px] h-auto relative rounded-lg overflow-hidden mx-auto">
            <Link href={url} alt="read more"> 
                <Image src={imageSrc} width={540} height={810} />
                <h3 className="absolute bottom-0 left-[50%] -translate-x-[50%] text-[2.5rem] bg-black w-full bg-opacity-[40%] text-center text-gray-200">{instrument}</h3>
            </Link>
        </div>
    )
}