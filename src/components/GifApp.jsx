import { useGif } from '../hooks/useGif'
import { BuscarGif } from './BuscarGif'
import { ContenedorGifs } from './ContenedorGifs'

//functional component
export const GifApp = () => {

    const {handleGetGif, gifs} = useGif()

    return (
        //fragment
        <>
        {/*props = una propiedad que viaja entre componentes*/}
            <BuscarGif handleGetGif={handleGetGif}/>
            <ContenedorGifs gifs={gifs}/>

        </>
    )
}