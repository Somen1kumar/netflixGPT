import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SPECIFIC_MOVIE_VIDEO, FETCH_USER_AUTHENTICATION } from '../utils/constants';
import { addCurrentVideos } from '../utils/currentMovieReducer';


const FetchSpecificVideoList = (id) => {
    // const {key = 823464} = props;
    const dispatch = useDispatch();
    useEffect(() => {
        try {
            fetchList();
          } catch (error) {
            console.log(error);
          }
    },[]);

    const fetchList = async () => {
        const URL = `${SPECIFIC_MOVIE_VIDEO}${id}/videos`
        const fetchData = await fetch(URL, FETCH_USER_AUTHENTICATION);
        const json = await fetchData.json();
        let totalYoutubeVideo = json?.results.filter(itr => itr.site === "YouTube");
        if(totalYoutubeVideo.length > 6 ){
          totalYoutubeVideo.slice(0,6);
        }
        dispatch(addCurrentVideos(totalYoutubeVideo));
    } 

}
export default FetchSpecificVideoList;