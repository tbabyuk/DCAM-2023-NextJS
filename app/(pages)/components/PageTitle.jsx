

export const PageTitle = ({title, image}) => {

    return (
        <h1 className={`font-ovo text-white text-4xl px-5 py-14 lg:px-36 xl:px-52`} style={{backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundSize: "cover"}}>
            {title}        
        </h1>

    )
}