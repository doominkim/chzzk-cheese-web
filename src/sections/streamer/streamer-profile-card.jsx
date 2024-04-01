import React from 'react';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { Card, CardHeader, Divider, Grid, Box } from '@mui/material';

const data = [
  { text: '스펠렁키', value: 1000000 },
  { text: '소통', value: 2000 },
  { text: '메운디', value: 800 },
  { text: '림월드', value: 1000 },
  { text: '슨고', value: 100 },
  { text: 'Shadow Corridor 2 雨ノ四葩', value: 100 },
  { text: '그림자복도', value: 100 },
  { text: '슈마메2', value: 100 },
  { text: '종겜스트리머', value: 100 },
  { text: '네오춘천', value: 500 },
  { text: '녹두로만든', value: 500 },
  { text: '따이', value: 200 },
  { text: '^^7', value: 200 },
  { text: '무교', value: 200 },
  { text: '선고수리', value: 200 },
  { text: '춘천의아들', value: 200 },
  { text: '수박게임 2개 성공', value: 200 },
  { text: '녹교수님', value: 200 },
  { text: 'ㅇㅅㅇ', value: 200 },
  { text: '소통', value: 2000 },
  { text: '메운디', value: 800 },
  { text: '림월드', value: 1000 },
  { text: '슨고', value: 100 },
  { text: 'Shadow Corridor 2 雨ノ四葩', value: 100 },
  { text: '그림자복도', value: 100 },
  { text: '슈마메2', value: 100 },
  { text: '종겜스트리머', value: 100 },
  { text: '네오춘천', value: 500 },
  { text: '녹두로만든', value: 500 },
  { text: '따이', value: 200 },
  { text: '^^7', value: 200 },
  { text: '무교', value: 200 },
  { text: '선고수리', value: 200 },
  { text: '춘천의아들', value: 200 },
  { text: '수박게임 2개 성공', value: 200 },
  { text: '녹교수님', value: 200 },
  { text: 'ㅇㅅㅇ', value: 200 },
  { text: '소통', value: 2000 },
  { text: '메운디', value: 800 },
  { text: '림월드', value: 1000 },
  { text: '슨고', value: 100 },
  { text: 'Shadow Corridor 2 雨ノ四葩', value: 100 },
  { text: '그림자복도', value: 100 },
  { text: '슈마메2', value: 100 },
  { text: '종겜스트리머', value: 100 },
  { text: '네오춘천', value: 500 },
  { text: '녹두로만든', value: 500 },
  { text: '따이', value: 200 },
  { text: '^^7', value: 200 },
  { text: '무교', value: 200 },
  { text: '선고수리', value: 200 },
  { text: '춘천의아들', value: 200 },
  { text: '수박게임 2개 성공', value: 200 },
  { text: '녹교수님', value: 200 },
  { text: 'ㅇㅅㅇ', value: 200 },
];

const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

export default function StreamerProfileCard() {
  return (
    <Card>
      <CardHeader title="키워드" subheader="녹두로 - 대한민국 대표앵무스트리머" />

      <Divider sx={{ p: 1, borderStyle: 'dashed' }} />

      <Grid>
        <Box sx={{ p: 1 }}>
          <WordCloud
            data={data}
            // width={400}
            height={300}
            font="Times"
            //   fontStyle="italic"
            fontWeight="bold"
            fontSize={(word) => Math.log2(word.value) * 2}
            spiral="rectangular"
            rotate={() => 0}
            padding={1}
            random={Math.random}
            fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
            onWordClick={(event, d) => {
              console.log(`onWordClick: ${d.text}`);
            }}
            onWordMouseOver={(event, d) => {
              console.log(`onWordMouseOver: ${d.text}`);
            }}
            onWordMouseOut={(event, d) => {
              console.log(`onWordMouseOut: ${d.text}`);
            }}
          />
          ,
        </Box>
      </Grid>
    </Card>
  );
}
