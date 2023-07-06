"use client"


const ShowMessage = () => {

    const handleMessage = () => {
        alert("Hello there!")
    }

    return ( 
        <button onClick={handleMessage}>Show Message</button>
     );
}
 
export default ShowMessage;