import styles from './SearchVideoList.module.css';
import VideoList from "../VideoList";
import { useState } from 'react';

function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({videos}) {

    const [searchText, setSearchtext] = useState('Trailers')
    const foundVideos = filterVideos(videos, searchText)


    return ( 
        <section className={styles.container}>
            <input 
                type="search"
                placeholder="🔎︎ Pesquisar..."
                value={searchText} 
                onChange={(event) => setSearchtext(event.target.value)}
            />

            <VideoList
             videos={foundVideos}
            emptyHeading={`Nenhum resultado encontrado em "${searchText}"`}
             
            />

        </section>
        );

}

export default SearchVideoList;