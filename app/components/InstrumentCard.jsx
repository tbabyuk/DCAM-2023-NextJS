import Image from "next/image"
import Link from "next/link"



export const InstrumentCard = ({instrument, imageSrc, url}) => {

    return (
        <Link href={url} className="block w-[230px] h-auto rounded-lg overflow-hidden mx-auto">
            <div className="w-[230px] h-[300px] relative">
                <Image 
                    src={imageSrc}
                    width={230}
                    height={300}
                    alt="Photo of teacher Matthew"
                    className="h-full w-full object-cover"
                />
                    <h3 className="absolute bottom-0 left-[50%] -translate-x-[50%] text-[2rem] bg-black w-full bg-opacity-[40%] text-center text-gray-200">{instrument}</h3>
            </div>
        </Link>
    )
}