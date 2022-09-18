export default function Header({heading}){
    return(
        <div className="header flex">
        <h1 className="text-3xl font-semibold text-dark-blue-2 xs:ml-3 xs:text-2xl my-8">
          {heading}
        </h1>
      </div>
    )
} 