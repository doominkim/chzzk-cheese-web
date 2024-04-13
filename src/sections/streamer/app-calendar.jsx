import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { ResponsiveCalendar } from '@nivo/calendar';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import axios from 'axios';

// ----------------------------------------------------------------------

export default function AppCalendar({ title, subheader, channelId }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3000/channel/${channelId}/calendar`)
        .then((response) => response.data)
        .then((data) => setList(data));
    };
    fetchData();
  }, [channelId]);

  return (
    <Card>
      <CardHeader title="방송패턴" subheader="" sx={{ mb: 0 }} />
      <Box sx={{ height: 300 }}>
        <ResponsiveCalendar
          data={list}
          from="2024-01-01"
          to="2024-12-31"
          emptyColor="#141517"
          colors={['#0B6120', '#078A07', '#04B530', '#00DF39']}
          margin={{ top: 0, right: 20, bottom: 0, left: 30 }}
          yearSpacing={0}
          yearLegendOffset={8}
          monthBorderColor="#333"
          dayBorderWidth={2}
          dayBorderColor="#222"
          tooltip={(n) => `${n.day}`}
          monthLegend={(_year, month) => `${month + 1}월 `}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'row',
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: 'right-to-left',
            },
          ]}
          theme={{
            labels: { text: { fill: '#fff', fontSize: 15, fontWeight: 600 } },
          }}
        />
      </Box>
    </Card>
  );
}

AppCalendar.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string,
  channelId: PropTypes.string,
};
