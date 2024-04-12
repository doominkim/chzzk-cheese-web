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
        .then((response) => {
          console.log(response);
          return response.data;
        })
        .then((data) => setList(data));
    };
    fetchData();
  }, [channelId]);

  console.log(list);

  return (
    <Card>
      <CardHeader title="방송패턴" subheader="" sx={{ mb: 0 }} />
      <Box sx={{ height: 300 }}>
        <ResponsiveCalendar
          data={list}
          from="2024-01-01"
          to="2024-12-31"
          emptyColor="#141517"
          colors={['#FFBF00', '#FF8000', '#FF4000', '#FF0000']}
          margin={{ top: 0, right: 20, bottom: 0, left: 30 }}
          yearSpacing={0}
          yearLegendOffset={8}
          monthBorderColor="#333"
          dayBorderWidth={2}
          dayBorderColor="#222"
          tooltip={(n) => {}}
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
