interface Props {
    title: string,
    query?: string,
    category?: string
}

const Header = ({title, query, category}: Props) => {
    if(query && category){
        return (
            <h1 className="text-3xl text-[#7D7C7C] font-semibold italic">
                Search result for "{query}" in <span className="capitalize">{category}</span>
            </h1>
        )
    }

    if(query){
        return (
            <h1 className="text-3xl text-[#7D7C7C] font-semibold italic">
                Search result for "{query}"
            </h1>
        )
    }

    if(category){
        return (
            <span className="capitalize text-3xl text-[#7D7C7C] font-semibold italic">{category}</span>
        )
    }
    return (
        <h1 className="text-3xl text-[#7D7C7C] font-semibold italic">No Results..</h1>
    )
}

export default Header