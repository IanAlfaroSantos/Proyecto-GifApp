export const ContenedorGifs = ({gifs}) => {

    return(
        <>
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                {gifs.map(({id, title, url})=>{
                    return (
                        <img key={id} className="rounded-pill mt-3 my-3 me-3 img-fluid maxWidth-100% height-auto" src={url} alt="image"/>
                    )
                })}
            </div>
        </>
    )
}