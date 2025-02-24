import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedslice';
import Usercard from './Usercard';

const Feed = () => {
    const dispatch = useDispatch();
    const feed = useSelector((store) => store.feed);
    const fetchFeed = async () => {
        try {
          const res = await axios.get(`${BASE_URL}/user/feed`, {
            withCredentials: true,
          });
          dispatch(addFeed(res.data));
        } catch (err) {
          console.error(err);
        }
    };

    useEffect(() => {
        fetchFeed();
    },[]);


  return (
    <div className='flex justify-center my-10'>
        {feed && (<Usercard user = {feed[0]}/>)}
    </div>
  )
}

export default Feed
