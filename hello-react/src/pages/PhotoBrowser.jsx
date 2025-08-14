import { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { getCollectionPhotos, getCollections, getPhotos } from "../actions/photoActions";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function PhotoBrowser(){
    const [photos, setPhotos] = useState([]);
    const [collections, setCollections] = useState([]);
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        (async () => {
            const data = await getPhotos();
            setPhotos(data);
            const collectionsData = await getCollections();
            setCollections(collectionsData);
        })();
    },[]);

    async function loadCollection(collectionId){
        const data = await getCollectionPhotos(collectionId);
        setPhotos(data)
    }

    return (
        <div>
            <h2>Photo Browser</h2>
            <div className="flex flex-wrap gap-4 mb-4">
                {
                    collections.map(collection => <button onClick={() => loadCollection(collection.id)} className="bg-gray-300 rounded-md p-3" key={collection.id}>{collection.title}</button>)
                }
            </div>
            <div className="flex flex-wrap gap-4">
            {
                photos.map(photo => (
                    <a href={photo.urls.full} key={photo.id}  download={true}>
                        <img 
                            src={photo.urls.small} 
                            alt={photo.alt_description} 
                            className="w-[200px]"
                        />
                    </a>
                ))
            }</div>
            <hr className="mv-4" />

            <RowsPhotoAlbum photos={photos.map(photo => ({
                    src: photo.urls.full, 
                    width: 300, 
                    height: 300, 
                    alt: photo.alt_description
                }))} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={photos.map(photo => ({
            src: photo.urls.full, 
            alt: photo.alt_description
        }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />

          
        </div>
    );

}