

export const PostHeading = ({heading, bottom}) => {

    return (
          <h2 className={`font-ovo text-regRed font-semibold text-center px-5 lg:px-36 xl:px-64 text-3xl ${bottom}`}>{heading}</h2>
      )
  }