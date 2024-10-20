import {useState} from 'react'
import './App.css'
import PicsumImage from "./components/PicsumImage"
import LoadingText from "./components/LoadingText";
import ErrorMessage from "./components/ErrorMessage";

function App()
{
    type ImageDataT = {
        id?: string;
        autor?: string;
        width?: number;
        height?: number;
        url?: string;
        download_url?: string;
    };

    const [imageData, setImageData] = useState<ImageDataT>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const fetchImageData = async () => {
        setIsLoading(true);
        setIsError(false);
        try
        {
            const response = await fetch("https://picsum.photos/id/237/info");
            const data = await response.json();
            setImageData(data);
            console.log(data);
        }
        catch(error)
        {
            console.log(error);
            setIsError(true);
        }
        finally
        {
            setIsLoading(false);
        }
    }

    return (
        <div className="App">
            <h1>React Beispiel</h1>
            <h2>Aufruf einer JSON API um ein Bild zu laden</h2>
            <LoadingText isLoading={isLoading}/>
            <PicsumImage imageData={imageData}/>
            {isError && (
                <ErrorMessage level="error">Ausnahmefehler!!!</ErrorMessage>
            )}

            <button onClick={fetchImageData}>Bild laden</button>
            <p className="read-the-docs">
                {new Date().toLocaleDateString('de-De')}
            </p>

        </div>
    )
}

export default App