import { Helmet } from 'react-helmet-async';
import StreamerListView from 'src/sections/streamer/view/streamer-list-view';

// ----------------------------------------------------------------------

export default function StreamerBoardListPage() {
  return (
    <>
      <Helmet>
        <title> Streamer | Minimal UI </title>
      </Helmet>

      <StreamerListView />
    </>
  );
}
