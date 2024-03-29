import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { ResponsiveCalendar } from '@nivo/calendar';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function AppCalendar() {
  return (
    <Card>
      <CardHeader title="방송시간 분석" subheader="녹두로님의 방송 패턴입니다." sx={{ mb: 0 }} />
      <Box sx={{ height: 300 }}>
        <ResponsiveCalendar
          data={[
            {
              value: 312,
              day: '2017-05-02',
            },
          ]}
          from="2016-03-01"
          to="2016-07-12"
          emptyColor="#eeeeee"
          colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
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
