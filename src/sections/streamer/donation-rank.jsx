import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import moment from 'moment';
import Scrollbar from 'src/components/scrollbar';

import {
  Box,
  Card,
  CardHeader,
  List,
  ListItem,
  Avatar,
  Typography,
  AvatarGroup,
  Chip,
} from '@mui/material';

export default function DonationRank({ channelId }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const from = moment().startOf('day').format('YYYY-MM-DD HH:mm:ss');
      const to = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
      const query = `?uuid=${channelId}&fromCreatedAt=${from}&toCreatedAt=${to}`;

      await axios
        .get(`http://52.78.41.110/api/channel/dashboard/donationRank${query}`)
        .then((response) => response.data)
        .then((data) => setList(data));
    };
    fetchData();
  }, [channelId]);

  console.log(list);

  return (
    <Card>
      <CardHeader title="후원 랭커" />

      <Box sx={{ width: '100%', height: 300, bgcolor: 'background.paper' }}>
        <Scrollbar>
          <List>
            {list.map((item, index) => (
              <ListItem>
                {index + 1}위
                <Chip
                  size="small"
                  sx={{
                    border: '1px solid #00ffa3',
                    color: '#00ffa3',
                    fontWeight: 600,
                  }}
                  label={item.nickname ? item.nickname : '익명의 후원자'}
                />
                총 {item.donateAmount} 원 후원 총 {item.donateCount} 번 후원
                <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                  {moment(item.createdAt).format('YYYY-MM-DD HH:mm')}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Scrollbar>
      </Box>
    </Card>
  );
}

DonationRank.propTypes = {
  channelId: PropTypes.string,
};
