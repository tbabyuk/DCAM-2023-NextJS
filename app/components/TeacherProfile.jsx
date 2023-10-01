


const TeacherProfile = ({photo, name, title, instrument, bio}) => {
    return ( 
        <div className="flex-col leading-10">
            <div className="mb-5">
                <h2 className="font-ovo text-regRed text-3xl font-semibold text-center pb-3">{name}</h2>
                {title && <h4 className="font-ovo text-regRed text-xl font-semibold text-center pb-3">{title}</h4>}
                <h4 className="font-ovo text-regRed text-xl font-semibold text-center pb-8">Teacher: {instrument}</h4>
            </div>
            <div className="flex flex-col md:flex-row">
                <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0 mx-auto">
                    <img src={photo} className="rounded-xl shadow-lg" style={{width: "200px"}} alt={`photo of ${name}`} />
                </figure>
                <div className="hyphens-auto">
                    <p>{bio}</p>
                </div>
            </div>
        </div>
    );
}
 
export default TeacherProfile;