import * as React from 'react';
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

export default function DonationBoard({ channelId }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const from = moment().startOf('day').format('YYYY-MM-DD HH:mm:ss');
      const to = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
      const query = `?uuid=${channelId}&fromCreatedAt=${from}&toCreatedAt=${to}`;

      await axios
        .get(`http://52.78.41.110/api/channel/dashboard/donations${query}`)
        .then((response) => response.data)
        .then((data) => setList(data));
    };

    const intervalId = setInterval(fetchData, 30000);
    return () => clearInterval(intervalId);
  }, [channelId]);

  return (
    <Card>
      <CardHeader title="후원 목록" />

      <Box sx={{ width: '100%', height: 300, bgcolor: 'background.paper' }}>
        <Scrollbar>
          <List>
            {list.map((item) => (
              <ListItem>
                <Chip
                  size="small"
                  sx={{
                    border: '1px solid #00ffa3',
                    color: '#00ffa3',
                    fontWeight: 600,
                  }}
                  label={item.nickname ? item.nickname : '익명의 후원자'}
                />
                <AvatarGroup>
                  {item.badges &&
                    item.badges.map((badge) => (
                      <Avatar src={badge.imageUrl} sx={{ width: 18, height: 18 }} />
                    ))}
                </AvatarGroup>
                님이 {item.payAmount}원 후원!!
                {item.message}
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

DonationBoard.propTypes = {
  channelId: PropTypes.string,
};
