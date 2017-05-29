import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
  FETCH_JOBS,
  LIKE_JOB
} from './types'

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '4022372635962623',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

const buildJobUrl = (zip) => {
  const query= qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async (dispatch) => {
  try {
    let zip = await reverseGeocode(region);
    const url = buildJobUrl(zip);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch(e) {
    console.log(e);
  }
};

const const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOB
  };
};
