


import {AiFillFilePdf} from "react-icons/ai"


export const DownloadButton = ({text, file}) => {
    return ( 
        <div className="grid place-items-center">
            <a href={`/downloads/${file}`} download className="bg-regGreen font-semibold py-4 px-6 rounded text-gray-100 flex items-center"><AiFillFilePdf size="1.2em" />&nbsp;{text}</a>
        </div>
     );
}