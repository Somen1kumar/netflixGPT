import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ACTOR_LIST_URL, FETCH_USER_AUTHENTICATION } from '../utils/constants';
import { addCurrentActors } from '../utils/currentMovieReducer';


const FetchActorsList = (id) => {
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
        const URL = `${ACTOR_LIST_URL}${id}/credits`
        const fetchData = await fetch(URL, FETCH_USER_AUTHENTICATION);
        const json = await fetchData.json();
        dispatch(addCurrentActors(json));
    } 

}
export default FetchActorsList;