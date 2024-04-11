import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import Chip from '@mui/material/Chip';

import { fDateTime } from 'src/utils/format-time';
import { useState, useEffect } from 'react';
import axios from 'axios';

// ----------------------------------------------------------------------

export default function AnalyticsOrderTimeline({ title, subheader, channelId, ...other }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3000/channel/${channelId}/recentActivity`)
        .then((response) => response.data)
        .then((data) => setList(data));
    };
    fetchData();
  }, [channelId]);

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

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
        {list.map((item, index) => (
          <OrderItem key={index} item={item} lastTimeline={index === list.length - 1} />
        ))}
      </Timeline>
    </Card>
  );
}

AnalyticsOrderTimeline.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string,
  channelId: PropTypes.string,
};

// ----------------------------------------------------------------------

function OrderItem({ item, lastTimeline }) {
  const { liveTitle, averageViewers, start, end, liveCategoryValue } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot sx={lastTimeline && { border: '2px solid #00ffa3', color: '#00ffa3' }} />
        {lastTimeline ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">
          <Chip
            label={liveCategoryValue}
            size="small"
            variant="outlined"
            sx={{ border: '2px solid #00ffa3', color: '#00ffa3', fontWeight: 600 }}
          />
          <br />
          {lastTimeline}
          {liveTitle}
        </Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {fDateTime(start, 'MM-dd HH:mm')} {lastTimeline ? null : ` - ${fDateTime(end, 'HH:mm')}`}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object,
  lastTimeline: PropTypes.bool,
};
