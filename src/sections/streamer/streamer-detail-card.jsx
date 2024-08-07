import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import Iconify from 'src/components/iconify';
import { fShortenNumber } from 'src/utils/format-number';

import { Card, Grid, Box, Avatar, Stack, Link, Typography } from '@mui/material';
import SvgColor from 'src/components/svg-color';
import { alpha } from '@mui/material/styles';

export default function StreamerDetailCard({ channelId }) {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://52.78.41.110/api/channel/${channelId}`)
        .then((response) => response.data)
        .then((data) => setChannel(data));
    };
    fetchData();
  }, [channelId, setChannel]);

  let boxShadow;
  if (channel && channel.openLive) {
    boxShadow = {
      boxShadow: `0 0 0 2px linear-gradient(to right, #44b700, #00ffa3)`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        // animation: 'ripple 2.0s infinite',
        border: '2px solid currentColor',
        content: '""',
      },
    };
  }

  const latestPostLarge = false;

  const latestPost = true;

  const renderAvatar = (
    <Avatar
      alt={channel.channelName}
      src={channel.channelImageUrl}
      sx={{
        zIndex: 9,
        width: 32,
        height: 32,
        position: 'absolute',
        left: (theme) => theme.spacing(3),
        bottom: (theme) => theme.spacing(-2),
        ...((latestPostLarge || latestPost) && {
          zIndex: 9,
          top: 24,
          left: 24,
          width: 40,
          height: 40,
        }),
      }}
    />
  );

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        height: 44,
        overflow: 'hidden',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        ...(latestPostLarge && { typography: 'h5', height: 60 }),
        ...((latestPostLarge || latestPost) && {
          color: 'common.white',
        }),
      }}
    >
      {channel.channelName}
    </Link>
  );

  const renderInfo = (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={1.5}
      justifyContent="flex-end"
      sx={{
        mt: 3,
        color: 'text.disabled',
      }}
    >
      {[
        { number: 1, icon: 'eva:message-circle-fill' },
        { number: 1, icon: 'eva:eye-fill' },
        { number: 1, icon: 'eva:share-fill' },
      ].map((info, _index) => (
        <Stack
          key={_index}
          direction="row"
          sx={{
            ...((latestPostLarge || latestPost) && {
              opacity: 0.48,
              color: 'common.white',
            }),
          }}
        >
          <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
          <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
        </Stack>
      ))}
    </Stack>
  );

  const renderCover = (
    <Box
      component="img"
      alt={channel.channelName}
      src={channel.channelImageUrl}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 2,
        color: 'text.disabled',
        ...((latestPostLarge || latestPost) && {
          opacity: 1,
          color: 'common.white',
        }),
      }}
    >
      {channel.channelDescription}
    </Typography>
  );

  const renderShape = (
    <SvgColor
      color="paper"
      sx={{
        width: 80,
        height: 36,
        zIndex: 9,
        bottom: -15,
        position: 'absolute',
        ...((latestPostLarge || latestPost) && { display: 'none' }),
      }}
    />
  );
  return (
    <Grid xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3} item>
      <Card
        sx={{
          minHeight: 515,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 2 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >
          {renderShape}
          {renderAvatar}
          {renderCover}
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
            width: 1,
            bottom: 0,
            position: 'absolute',
          }}
        >
          {renderDate}
          {renderTitle}
          {renderInfo}
        </Box>
      </Card>
    </Grid>
  );
}

StreamerDetailCard.propTypes = {
  channelId: PropTypes.string,
};
