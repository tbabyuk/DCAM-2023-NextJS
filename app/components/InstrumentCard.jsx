import Image from "next/image"



export const InstrumentCard = ({instrument, imageSrc}) => {

    return (
        <div className="w-[250px] h-auto relative bg-blue-300 rounded-lg overflow-hidden mx-auto">
            <Image src={imageSrc} width={540} height={810} />
            <h3 className="absolute bottom-0 left-[50%] -translate-x-[50%] text-[2.5rem] bg-black w-full bg-opacity-[40%] text-center text-gray-200">{instrument}</h3>
        </div>
    )
}