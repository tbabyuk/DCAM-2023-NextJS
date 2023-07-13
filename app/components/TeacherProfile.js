


const TeacherProfile = ({photo, name, title, instrument, bio}) => {
    return ( 
        <div className="md:flex md:items-center">
            <img src={photo} className="rounded-xl shadow-lg md:h-80 md:me-5 mx-auto" alt={`photo of ${name}`} />
            <div className="mt-10 md:mt-0 lg:mb-0 lg:p-10">
                <h2 className="font-ovo text-regRed text-3xl font-semibold text-center pb-3">{name}</h2>
                {title && <h4 className="font-ovo text-regRed text-xl font-semibold text-center pb-3">{title}</h4>}
                <h4 className="font-ovo text-regRed text-xl font-semibold text-center pb-8">Teacher: {instrument}</h4>
                <p>{bio}</p>
            </div>
        </div>
     );
}
 
export default TeacherProfile;