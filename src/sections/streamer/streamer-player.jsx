import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReactHlsPlayer from 'react-hls-player';

import { Grid } from '@mui/material';

export default function StreamerPlayer({ channelId }) {
  const [hlsUrl, setHlsUrl] = useState('');

  const [detail, setDetail] = useState();

  useEffect(() => {
    const liveDetail = async () => {
      await axios
        .get(`http://52.78.41.110/api/chzzk/channel/${channelId}/liveDetail`)
        .then((response) => response.data)
        .then((data) => setDetail(data));
    };
    liveDetail();
  }, [channelId]);

  useEffect(() => {
    const hls = detail?.livePlayback?.media.find((v) => v.mediaId === 'HLS');
    if (hls) {
      setHlsUrl(hls.path);
    }
  }, [detail]);

  return (
    <Grid xs={12} item>
      <ReactHlsPlayer src={hlsUrl} autoPlay={1} controls={1} width="100%" height="auto" />
    </Grid>
  );
}

StreamerPlayer.propTypes = {
  channelId: PropTypes.string,
};
