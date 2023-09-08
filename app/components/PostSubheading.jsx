



export const PostSubheading = ({subheading, align, bottom}) => {

    return (
          <h3 className={`font-ovo ${align} font-semibold text-2xl ${bottom}`}>{subheading}</h3>
      )
  }