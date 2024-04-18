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
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { fShortenNumber } from 'src/utils/format-number';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { useRouter } from 'src/routes/hooks';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledBadge = styled(Badge)(({ theme }) => ({
  position: 'absolute', // Badge와 Avatar를 제어하기 위한 컨테이너 설정
  '& .MuiBadge-badge': {
    position: 'absolute', // Badge를 컨테이너 기준으로 배치
    width: 30,
    fontSize: 10,
    fontWeight: 600,
    top: 15, // Badge 상단 가장자리를 Avatar와 일렬로 정렬
    left: 19, // Badge 오른쪽 가장자리를 Avatar와 일렬로 정렬
    padding: 0,
    backgroundColor: '#FF0000', // Badge 색상 설정
    color: '#fff', // Badge 텍스트 색상 설정
    borderRadius: 4,
    zIndex: 10, // Badge가 위에 유지되도록 하십시오.
  },
}));

export default function PostCard({ post }) {
  const router = useRouter();

  const {
    channelDescription,
    uuid,
    channelImageUrl,
    channelName,
    follower,
    openLive,
    channelLive,
  } = post;

  const moveChzzk = () => {
    window.location.href = `https://chzzk.naver.com/live/${uuid}`;
  };

  const handleClick = () => {
    router.push(`/streamer-detail/${uuid}`);
  };

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
        backgroundColor: '#111',
        color: '#00ffa3',
        ...(openLive
          ? {
              boxShadow: `0 0 0 2px #00ffa3`,
              '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
              },
            }
          : { filter: 'grayscale(1)' }),
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

  const renderDescription = (
    <Typography
      variant="overline"
      component="div"
      sx={{
        p: 1,
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
      }}
    />
  );

  const renderButton = (
    <Stack direction="row" justify-content="space-between" sx={{ pt: 2 }}>
      <Button
        variant="outlined"
        startIcon={<Iconify width={16} icon="mdi:tv" />}
        sx={{
          // px: 0.5,
          fontSize: 12,
          fontWeight: 600,
          border: '2px solid',
        }}
        onClick={moveChzzk}
      >
        바로가기
      </Button>
      <Button
        variant="outlined"
        endIcon={<Iconify width={16} icon="mdi:arrow-right" />}
        sx={{
          ml: 1,
          fontSize: 12,
          fontWeight: 600,
          border: '2px solid',
        }}
        onClick={handleClick}
      >
        방송현황
      </Button>
    </Stack>
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
          {openLive ? <StyledBadge badgeContent="LIVE">{renderAvatar}</StyledBadge> : renderAvatar}
          {renderCover}
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
          }}
        >
          <Stack>
            <Typography variant="h6" sx={{ p: 1 }}>
              {channelName}
            </Typography>
            {channelLive ? (
              <Chip
                label={
                  openLive && channelLive && channelLive.liveCategory
                    ? channelLive.liveCategory.liveCategoryValue
                    : '오프라인'
                }
                size="small"
                variant="outlined"
                sx={openLive && { border: '2px solid #00ffa3', color: '#00ffa3', fontWeight: 600 }}
              />
            ) : (
              <Chip
                label="오프라인"
                size="small"
                variant="outlined"
                sx={openLive && { border: '2px solid #00ffa3', color: '#00ffa3', fontWeight: 600 }}
              />
            )}
          </Stack>
          {renderDescription}
          {renderTitle}
          {renderInfo}
          {renderButton}
        </Box>
      </Card>
    </Grid>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
