import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    seletedPage: string;
    setSeletedPage: (value:string) => void;
}

const Link = ({
    page,
    seletedPage,
    setSeletedPage,
}: Props) => {
  const lowerCaseRoute = page.toLowerCase().replace(/ /g, "")
  
  return (
    <AnchorLink
    className={
     `${(seletedPage === lowerCaseRoute) ? "text-primary-500" : ""}
      transition duration-500 hover:text-primary-300`
    }
    href={`#${lowerCaseRoute}`}

   
    >
        {`#${page}`}
    </AnchorLink>
  )
}

export default Link