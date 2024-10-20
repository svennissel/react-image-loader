import {FC} from "react";

interface LoadingTextProps
{
    isLoading: boolean;
}

const LoadingText: FC<LoadingTextProps> = ({isLoading}) => {
    return <div>{isLoading ? <p>Bild wird geladen...</p> : <p>Bereit</p>}</div>
}

export default LoadingText;
