






export const PostSubheading = ({subheading, align, bottom}) => {

    return (
          <h3 className={`font-ovo text-regRed ${align} font-semibold px-5 lg:px-36 xl:px-64 text-2xl ${bottom}`}>{subheading}</h3>
      )
  }