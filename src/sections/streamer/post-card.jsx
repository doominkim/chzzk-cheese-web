import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';

import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export default function PostCard({ post, index }) {
  const router = useRouter();

  const {
    channelDescription,
    channelId,
    channelImageUrl,
    channelName,
    // channelType,
    follower,
    openLive,
    channelLive,
  } = post;

  const handleClick = () => {
    router.push(`/streamer-detail/${channelId}`);
  };

  let boxShadow;
  if (openLive) {
    boxShadow = {
      boxShadow: `inset 0 0 0 2px linear-gradient(to right, #44b700, #00ffa3)`,
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

  const renderAvatar = (
    <Avatar
      alt={channelName}
      src={channelImageUrl}
      sx={{
        zIndex: 9,
        width: 50,
        height: 50,
        position: 'absolute',
        left: (theme) => theme.spacing(3),
        bottom: (theme) => theme.spacing(-2),
        backgroundColor: '#00ffa3',
        color: '#00ffa3',
        boxShadow,
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
      }}
      onClick={handleClick}
    >
      {channelDescription}
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
        { number: follower, icon: 'mdi:person-star' },
        // { number: follower, icon: 'eva:eye-fill' },
      ].map((info, _index) => (
        <Stack key={_index} direction="row">
          <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
          <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
        </Stack>
      ))}
    </Stack>
  );

  const renderCover = (
    <Box
      component="img"
      alt={channelImageUrl}
      src={channelImageUrl}
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
      }}
    >
      {channelLive ? channelLive.liveTitle : null}
      {channelLive && channelLive.liveCategory ? channelLive.liveCategory.liveCategoryValue : null}
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
        // ...((latestPostLarge || latestPost) && { display: 'none' }),
      }}
    />
  );

  return (
    <Grid xs={12} sm={6} md={3}>
      <Card>
        <Box
          sx={{
            position: 'relative',
            pt: 'calc(100% * 3 / 4)',
          }}
        >
          {renderShape}

          {renderAvatar}

          {renderCover}
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
          }}
        >
          <Stack>
            {channelName}
            {channelLive ? (
              <Chip
                label={
                  openLive && channelLive && channelLive.liveCategory
                    ? channelLive.liveCategory.liveCategoryValue
                    : 'Offline'
                }
                size="small"
                color="warning"
                variant="outlined"
                sx={{ border: '2px solid #00ffa3', color: '#00ffa3', fontWeight: 600 }}
              />
            ) : (
              <Chip
                label="Offline"
                size="small"
                color="warning"
                variant="outlined"
                sx={{ border: '2px solid #00ffa3', color: '#00ffa3', fontWeight: 600 }}
              />
            )}

            {/* {channelLive ? channelLive.liveTitle : null}
            {channelLive && channelLive.liveCategory
              ? channelLive.liveCategory.liveCategoryValue
              : null} */}
          </Stack>
          {renderDate}
          {renderTitle}
          {renderInfo}
        </Box>
      </Card>
    </Grid>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};
