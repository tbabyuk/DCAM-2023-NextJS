


import {AiFillFilePdf} from "react-icons/ai"


export const DownloadButton = ({text, file}) => {
    return ( 
        <div className="grid place-items-center pt-6 pb-12">
            <a href={file} download className="bg-regGreen font-semibold py-3 px-6 rounded text-gray-100 flex items-center"><AiFillFilePdf size="1.2em" />&nbsp;{text}</a>
        </div>
     );
}