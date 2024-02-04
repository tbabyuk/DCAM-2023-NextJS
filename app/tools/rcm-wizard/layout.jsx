

const ToolsLayout = ({ children }) => {
    return (
        <>
            <div className="flex flex-col-reverse gap-9 md:flex-row justify-between items-center text-white px-5 py-8 lg:px-36 xl:px-52 bg-gradient-to-r from-[#241773] to-regBlue bg-center bg-cover">
                <img src="/images/tools/rcm-logo.png" width="110px" />
                <div>
                    <h1 className="text-center text-4xl">RCM Exam Wizard</h1>
                    <p className="text-center font-light">See basic exam requirements for all RCM piano levels</p>
                </div>
                <img src="/images/tools/dcam-logo-white.png" width="110px" />
            </div>
            {children}
        </>
    )
  }

export default ToolsLayout