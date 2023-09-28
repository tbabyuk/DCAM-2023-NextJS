


export const PostSource = ({source, bottom}) => {
    return ( 
        <div className="text-center">
            <p className={`italic text-gray-500 ${bottom}`}>Source: {source}</p>
        </div>
     );
}