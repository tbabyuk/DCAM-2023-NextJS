



export const BlogCard = ({title, date, imageUrl, description, blogLink, category}) => {
    return ( 
        <div className="p-6 bg-white rounded-md shadow-lg" style={{width: "350px"}}>
            <h2 className="text-2xl">{title}</h2>
            <small>{date}</small>
            <img className="py-6" src={imageUrl} />
            <p className="mb-4">{description}</p>
            <button className="block mb-4 dcam-button">Read More</button>
            <small>Category: {category}</small>
        </div>
     );
}
