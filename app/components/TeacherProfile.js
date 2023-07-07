


const TeacherProfile = ({photo, name, title, instrument, bio}) => {
    return ( 
        <div className="grid lg:grid-cols-2">
            <div className="mb-10 lg:p-10 2xl:p-20">
                <img src={photo} className="rounded-xl shadow-lg" style={{width: "100%"}} alt="photo of Tiago Cardoso" />
            </div>
            <div className="mb-28 lg:mb-0 lg:p-10 2xl:p-20">
                <h2 className="font-ovo text-regRed text-3xl font-semibold text-center pb-3">{name}</h2>
                {title && <h4 className="font-ovo text-regRed text-xl font-semibold text-center pb-3">{title}</h4>}
                <h4 className="font-ovo text-regRed text-xl font-semibold text-center pb-8">Teacher: {instrument}</h4>
                <p>{bio}</p>
            </div>
        </div>
     );
}
 
export default TeacherProfile;