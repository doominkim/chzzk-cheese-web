import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import axios from 'axios';
import Scrollbar from 'src/components/scrollbar';

export default function StreamerListView() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('http://localhost:3000/chzzk/channels/554e99695decc451d57788b1fd5d5c07')
        .then((response) => response.data)
        .then((data) => setChannels(data.map((item) => item.channel)));
    };
    fetchData();
  }, []);

  console.log(channels);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h5">스트리머</Typography>
      </Stack>

      <Card>
        <TableContainer sx={{ overflow: 'unset' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>내용</TableCell>
                <TableCell>내용</TableCell>
                <TableCell>내용</TableCell>
              </TableRow>
            </TableHead>

            {/* <TableBody>
              {channels.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.channelName}</TableCell>
                  <TableCell>{row.channelDescription}</TableCell>
                  <TableCell>{row.openLive ? '방송중' : '방송중 X'}</TableCell>
                  <TableCell>{row.followerCount}</TableCell>
                </TableRow>
              ))}
            </TableBody> */}
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
}
