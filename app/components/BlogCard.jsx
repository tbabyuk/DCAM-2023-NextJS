
import Link from "next/link";


export const BlogCard = ({title, date, imageUrl, description, blogLink, category}) => {
    return ( 
        <div className="p-6 bg-white rounded-md shadow-lg mx-auto" style={{height: "580px", width: "350px"}}>
            <h2 className="text-2xl">{title}</h2>
            <small className=" text-gray-500">{date}</small>
            <img className="py-6" src={imageUrl} />
            <p className="mb-4">{description}</p>
            <button className="block mb-4 dcam-button"><Link href={blogLink}>Read More</Link></button>
            <small className=" text-gray-500">Category: {category}</small>
        </div>
     );
}
