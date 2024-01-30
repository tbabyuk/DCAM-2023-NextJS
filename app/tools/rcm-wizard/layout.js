

const ToolsLayout = ({ children }) => {
    return (
        <>
            <div className="flex justify-between items-center text-white text-4xl px-5 py-8 lg:px-36 xl:px-52 bg-gradient-to-r from-[#241773] to-regBlue bg-center bg-cover">
                <img src="/images/tools/rcm-logo.png" width="110px" />
                <h1>TOOLS - RCM EXAM WIZARD</h1>
                <img src="/images/tools/dcam-logo-white.png" width="110px" />
            </div>
            {children}
        </>
    )
  }

export default ToolsLayout