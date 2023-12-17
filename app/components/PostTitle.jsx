

export const PostTitle = ({title, date}) => {
    return ( 
        <div className="px-5 py-14 lg:px-36 xl:px-64">
            <h1 className="font-ovo text-regRed text-4xl">{title}</h1>
            <small className="text-gray-500">{date} by Taras (Terry) Babyuk</small>
        </div>
     );
}