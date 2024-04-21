import { useState, useEffect } from 'react';
import axios from 'axios';

import { faker } from '@faker-js/faker';
import { useParams } from 'react-router-dom';

import Scrollbar from 'src/components/scrollbar';
import Iconify from 'src/components/iconify';

import { Box, Card, Typography, Container, CardHeader } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import AppOrderTimeline from '../app-order-timeline';
import AppCurrentSubject from '../app-current-subject';
import AppCalendar from '../app-calendar';
import StreamerDetailCard from '../streamer-detail-card';
import DonationRank from '../donation-rank';
import UserRank from '../user-rank';
import DonationBoard from '../donation-board';

// import AppTasks from '../app-tasks';
// import AppNewsUpdate from '../app-news-update';
// import AppCurrentVisits from '../app-current-visits';
// import AppWebsiteVisits from '../app-website-visits';
// import AppWidgetSummary from '../app-widget-summary';
// import AppTrafficBySite from '../app-traffic-by-site';
// import AppConversionRates from '../app-conversion-rates';
// import StreamerProfileCard from '../streamer-profile-card';

// ----------------------------------------------------------------------

export default function StreamerDetailView() {
  const { channelId } = useParams();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        {/* 강소연님의 종합보고서 */}
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={8} lg={4}>
          <StreamerDetailCard channelId={channelId} />
        </Grid>
        <Grid xs={12} md={4} lg={4}>
          <AppOrderTimeline title="최근 활동내역" channelId={channelId} />
        </Grid>
        {/* <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Website Visits"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid>{' '} */}
        {/* <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="가장 많은 채팅패턴"
            subheader="2024-01-01 ~ 2024-04-01"
            chart={{
              series: [
                { label: 'ㄸㅇ', value: 400 },
                { label: '^^7', value: 430 },
                { label: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ', value: 690 },
                { label: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ', value: 1100 },
                { label: 'ㄹㅇㅋㅋ', value: 1200 },
                { label: 'ㄸㅇ', value: 1380 },
              ],
            }}
          />
        </Grid> */}
        <Grid xs={12} md={12} lg={4}>
          <AppCurrentSubject
            channelId={channelId}
            title="종합게임능력치"
            // subheader="고이다 못해 썩어버렸습니다...🥹"
            chart={{
              categories: [
                // '스펠렁키',
                // '림월드',
                // '소통',
                // 'StarCraft',
                // '슈퍼마리오메이커2',
                // '포트나이트',
              ],
              series: [
                // { name: 'Series 1', data: [100, 50, 30, 40, 100, 20] },
                // { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                // { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={12} lg={8}>
          <DonationBoard channelId={channelId} />
        </Grid>
        <Grid xs={12} md={12} lg={4}>
          <DonationRank channelId={channelId} />
        </Grid>
        {/* <Grid xs={12} md={12} lg={4}>
          <UserRank channelId={channelId} />
        </Grid> */}
        {/* 
        <Grid xs={12} sm={2} md={2}>
          <AppWidgetSummary
            title="총 방송시간"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={2} md={2}>
          <AppWidgetSummary
            title="총 방송시간"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={2} md={2}>
          <AppWidgetSummary
            title="총 방송시간"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={2} md={2}>
          <AppWidgetSummary
            title="최근 방송일"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={2} md={2}>
          <AppWidgetSummary
            title="최대 방송시간"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={2} md={2}>
          <AppWidgetSummary
            title="평균 방송시간"
            total={100}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid> */}
        <Grid xs={12}>
          <AppCalendar channelId={channelId} />
        </Grid>
        {/* 
        <Grid xs={12} md={12} lg={12}>
          <StreamerProfileCard />
        </Grid> */}
        {/* <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="방명록"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
}
