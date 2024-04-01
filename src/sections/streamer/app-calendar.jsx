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
            { day: '2024-01-01', value: 100 },
            { day: '2024-01-02', value: 0 },
            { day: '2024-01-03', value: 0 },
            { day: '2024-01-04', value: 100 },
            { day: '2024-01-05', value: 0 },
            { day: '2024-01-06', value: 0 },
            { day: '2024-01-07', value: 0 },
            { day: '2024-01-08', value: 100 },
            { day: '2024-01-09', value: 0 },
            { day: '2024-01-10', value: 0 },
            { day: '2024-01-11', value: 0 },
            { day: '2024-01-12', value: 100 },
            { day: '2024-01-13', value: 0 },
            { day: '2024-01-14', value: 0 },
            { day: '2024-01-15', value: 0 },
            { day: '2024-01-16', value: 100 },
            { day: '2024-01-17', value: 0 },
            { day: '2024-01-18', value: 0 },
            { day: '2024-01-19', value: 0 },
            { day: '2024-01-20', value: 0 },
            { day: '2024-01-21', value: 0 },
            { day: '2024-01-22', value: 100 },
            { day: '2024-01-23', value: 0 },
            { day: '2024-01-24', value: 0 },
            { day: '2024-01-25', value: 0 },
            { day: '2024-01-26', value: 0 },
            { day: '2024-01-27', value: 0 },
            { day: '2024-01-28', value: 0 },
            { day: '2024-01-29', value: 100 },
            { day: '2024-01-30', value: 0 },
            { day: '2024-01-31', value: 0 },
            { day: '2024-02-01', value: 0 },
            { day: '2024-02-02', value: 0 },
            { day: '2024-02-03', value: 0 },
            { day: '2024-02-04', value: 0 },
            { day: '2024-02-05', value: 0 },
            { day: '2024-02-06', value: 0 },
            { day: '2024-02-07', value: 0 },
            { day: '2024-02-08', value: 0 },
            { day: '2024-02-09', value: 0 },
            { day: '2024-02-10', value: 0 },
            { day: '2024-02-11', value: 0 },
            { day: '2024-02-12', value: 0 },
            { day: '2024-02-13', value: 0 },
            { day: '2024-02-14', value: 0 },
            { day: '2024-02-15', value: 0 },
            { day: '2024-02-16', value: 0 },
            { day: '2024-02-17', value: 0 },
            { day: '2024-02-18', value: 0 },
            { day: '2024-02-19', value: 0 },
            { day: '2024-02-20', value: 0 },
            { day: '2024-02-21', value: 0 },
            { day: '2024-02-22', value: 0 },
            { day: '2024-02-23', value: 0 },
            { day: '2024-02-24', value: 0 },
            { day: '2024-02-25', value: 0 },
            { day: '2024-02-26', value: 0 },
            { day: '2024-02-27', value: 0 },
            { day: '2024-02-28', value: 0 },
            { day: '2024-02-29', value: 100 },
            { day: '2024-03-01', value: 0 },
            { day: '2024-03-02', value: 0 },
            { day: '2024-03-03', value: 0 },
            { day: '2024-03-04', value: 100 },
            { day: '2024-03-05', value: 0 },
            { day: '2024-03-06', value: 0 },
            { day: '2024-03-07', value: 0 },
            { day: '2024-03-08', value: 0 },
            { day: '2024-03-09', value: 100 },
            { day: '2024-03-10', value: 0 },
            { day: '2024-03-11', value: 0 },
            { day: '2024-03-12', value: 0 },
            { day: '2024-03-13', value: 0 },
            { day: '2024-03-14', value: 0 },
            { day: '2024-03-15', value: 100 },
            { day: '2024-03-16', value: 0 },
            { day: '2024-03-17', value: 100 },
            { day: '2024-03-18', value: 0 },
            { day: '2024-03-19', value: 0 },
            { day: '2024-03-20', value: 0 },
            { day: '2024-03-21', value: 0 },
            { day: '2024-03-22', value: 0 },
            { day: '2024-03-23', value: 0 },
            { day: '2024-03-24', value: 0 },
            { day: '2024-03-25', value: 0 },
            { day: '2024-03-26', value: 0 },
            { day: '2024-03-27', value: 100 },
            { day: '2024-03-28', value: 0 },
            { day: '2024-03-29', value: 0 },
            { day: '2024-03-30', value: 0 },
            { day: '2024-03-31', value: 0 },
          ]}
          from="2024-01-01"
          to="2024-04-01"
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
