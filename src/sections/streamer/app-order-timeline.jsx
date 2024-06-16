import PropTypes from 'prop-types';

import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import Chip from '@mui/material/Chip';

import { Card, CardHeader, Divider, Grid, Box, Typography } from '@mui/material';

import { fDateTime } from 'src/utils/format-time';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export default function AnalyticsOrderTimeline({ title, subheader, channelId, ...other }) {
  const [list, setList] = useState([]);
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://52.78.41.110/channel/${channelId}/recentActivity`)
        .then((response) => response.data)
        .then((data) => setList(data));
    };
    fetchData();
  }, [channelId]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://52.78.41.110/channel/${channelId}`)
        .then((response) => response.data)
        .then((data) => setChannel(data));
    };
    fetchData();
  }, [channelId]);

  return (
    <Card
      {...other}
      sx={{
        minHeight: 515,
      }}
    >
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Timeline
          sx={{
            m: 0,
            p: 3,
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {list.length > 0 ? (
            list.map((item, index) => (
              <OrderItem
                key={index}
                item={item}
                firstTimeLine={index === 0}
                lastTimeline={index === list.length - 1}
                openLive={channel.openLive}
              />
            ))
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                verticalAlign: 'middle',
                height: '100%',
              }}
            >
              최근 활동내역이 존재하지 않습니다 🥹
            </Box>
          )}
        </Timeline>
      </Scrollbar>
    </Card>
  );
}

AnalyticsOrderTimeline.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string,
  channelId: PropTypes.string,
};

// ----------------------------------------------------------------------

function OrderItem({ item, firstTimeLine, lastTimeline, openLive }) {
  const { liveTitle, start, end, liveCategoryValue } = item;

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={
            firstTimeLine && openLive
              ? {
                  border: '2px solid #00ffa3',
                  color: '#00ffa3',
                }
              : null
          }
        />
        {lastTimeline ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">
          {liveCategoryValue ? (
            <Chip
              label={liveCategoryValue}
              size="small"
              variant="outlined"
              sx={{
                border: '2px solid #00ffa3',
                color: '#00ffa3',
                fontWeight: 600,
              }}
            />
          ) : (
            <Chip
              label="미선택"
              size="small"
              variant="outlined"
              sx={{
                border: '2px solid #333',
                color: '#fff',
                fontWeight: 600,
              }}
            />
          )}
          <br />
          {lastTimeline}
          {liveTitle}
        </Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {fDateTime(start, 'MM-dd HH:mm')}{' '}
          {firstTimeLine && openLive ? null : ` - ${fDateTime(end, 'MM-dd HH:mm')}`}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object,
  firstTimeLine: PropTypes.bool,
  lastTimeline: PropTypes.bool,
  openLive: PropTypes.bool,
};
