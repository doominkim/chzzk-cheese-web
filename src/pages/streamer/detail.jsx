import { Helmet } from 'react-helmet-async';
import StreamerDetailView from 'src/sections/streamer/view/streamer-detail-view';

// ----------------------------------------------------------------------

export default function StreamerBoardDetailPage() {
  return (
    <>
      <Helmet>
        <title> Streamer | Minimal UI </title>
      </Helmet>

      <StreamerDetailView />
    </>
  );
}
