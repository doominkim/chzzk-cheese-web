import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled, useTheme } from '@mui/material/styles';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 400;

const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ theme }) => ({
  height: CHART_HEIGHT,
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `100% !important`,
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    borderTop: `dashed 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

export default function AppCurrentSubject({ title, subheader, channelId, chart, ...other }) {
  const theme = useTheme();
  const [ranks, setRanks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3000/channel/${channelId}/liveCategoryRank`)
        .then((response) => response.data)
        .then((data) => setRanks(data));
    };
    fetchData();
  }, [channelId]);

  const [series, setSeries] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const emptyLiveCategory = [];
    const emptyLiveCategoryValue = [];
    ranks.forEach((rank) => {
      emptyLiveCategory.push(rank.count);
      emptyLiveCategoryValue.push(rank.liveCategoryValue);
    });

    setSeries(emptyLiveCategory);
    setCategories(emptyLiveCategoryValue);
  }, [ranks]);

  const { colors, options } = chart;

  const chartOptions = useChart({
    colors,
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.48,
    },
    legend: {
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: [...Array(6)].map(() => theme.palette.text.secondary),
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} />

      <StyledChart
        dir="ltr"
        type="radar"
        series={[
          {
            data: series,
          },
        ]}
        options={chartOptions}
        width="100%"
        height={340}
      />
    </Card>
  );
}

AppCurrentSubject.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
  channelId: PropTypes.string,
};
