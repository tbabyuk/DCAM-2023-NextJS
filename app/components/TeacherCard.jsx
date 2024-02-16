import Image from "next/image"



export const TeacherCard = ({teacher}) => {
  return (
    <div className="w-[230px] h-auto rounded-lg shadow-md overflow-hidden">
        <div className="w-[230px] h-[270px]">
            <Image 
                src={teacher.photo}
                width={200}
                height={300}
                alt={teacher.alt}
                className="h-full w-full object-cover"
            />
        </div>
        <div className="bg-gray-200 text-center p-3">
            <h4 className="font-bold text-[1.2rem] pb-2">{teacher.name}</h4>
            <p className="text-[0.9rem]">{teacher.instrument}</p>
        </div>
    </div>
    )
}
