
import Link from "next/link";


export const BlogCard = ({title, date, imageUrl, description, blogLink, category}) => {
    return ( 
        <div className="p-6 bg-white rounded-md shadow-lg mx-auto flex flex-col justify-between" style={{height: "560px", width: "350px"}}>
            <h2 className="text-2xl">{title}</h2>
            <small className=" text-gray-500">{date}</small>
            <img className="py-6" src={imageUrl} />
            <p className="mb-4">{description}</p>
            <Link href={blogLink}><button className="block mb-4 w-full dcam-button">Read More</button></Link>
            <small className=" text-gray-500">Category: {category}</small>
        </div>
     );
}
