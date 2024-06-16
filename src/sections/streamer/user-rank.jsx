import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Box, Card, Container, CardHeader } from '@mui/material';

export default function UserRank({ channelId }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const from = moment().startOf('day').format('YYYY-MM-DD HH:mm:ss');
      const to = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
      const query = `?uuid=${channelId}&fromCreatedAt=${from}&toCreatedAt=${to}`;

      await axios
        .get(`http://52.78.41.110/channel/dashboard/userRank${query}`)
        .then((response) => response.data)
        .then((data) => setList(data));
    };
    fetchData();
  }, [channelId]);

  console.log(list);

  return (
    <Card>
      <CardHeader title="1" />

      <Box>s</Box>
    </Card>
  );
}

UserRank.propTypes = {
  channelId: PropTypes.string,
};
