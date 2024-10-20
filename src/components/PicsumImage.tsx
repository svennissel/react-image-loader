import {FC} from "react";

interface PicsumImageProps
{
    imageData: any;
}

const PicsumImage: FC<PicsumImageProps> = ({imageData}) => {
    return (
        <div>
            <img alt={imageData.author} src={imageData.download_url} width={300}/>
            <div>Künstler: {imageData.author}</div>
        </div>
    )
}

export default PicsumImage;
