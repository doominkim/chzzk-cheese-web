import { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';

import { posts } from 'src/_mock/blog';

import Iconify from 'src/components/iconify';

import axios from 'axios';

import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';

// ----------------------------------------------------------------------

export default function StreamerListView() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('http://localhost:3000/channel')
        .then((response) => response.data)
        .then((data) => setChannels(data));
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">채널</Typography>

        {/* <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Post
        </Button> */}
      </Stack>

      <Stack mb={3} direction="row" alignItems="center" justifyContent="space-between">
        <PostSearch posts={channels} />
        <PostSort
          options={[
            { value: 'latest', label: '팔로워순' },
            { value: 'popular', label: '인기순' },
          ]}
        />
      </Stack>

      <Grid container spacing={3}>
        {channels.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
    </Container>
  );
}
