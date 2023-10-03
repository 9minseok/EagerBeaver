'use client';
import * as React from 'react';
import styles from './page.module.css';
import { Button, ButtonGroup, Card, CardContent, Typography } from '@mui/material';
import RankList from './rank';
import Image from 'next/image';
import Graph from './graph';
import History from './history';
import winner from '../../../public/images/free-icon-confetti-4525694.png';
import party from '../../../public/images/free-icon-championship-award-4798145.png';
import profit from '../../../public/images/image 39.png';
import axios from 'axios';

const turns = localStorage.getItem("Turns");
let turnNumber: number;

if (turns === "10") {
  turnNumber = 0;
} else if (turns === "15") {
  turnNumber = 1;
} else if (turns === "20") {
  turnNumber = 2;
}

// Props 타입 정해주기
// rankList에 들어갈 요소들
interface ranking {
  userName: string;
  rate: number;
}

// props type 지정
interface Props {
  turn: number;
  rankList: ranking[];
}

interface RankingPageProps {
  rank: Props[]; // Props 타입의 배열을 data 속성으로 받음
}

const ResultPage = (props: RankingPageProps) => {
  const [report, setReport] = React.useState(true);

  const nickName = localStorage.getItem("nickname");

  let tmp = localStorage.getItem("tmpAccessToken");
  if (tmp) {
    tmp = JSON.parse(tmp)
  }
  const accessToken = tmp;

  const apiURl = process.env.apiUrl;

  const handleRedis = () => {
    axios.delete(apiURl + '/gameLog', {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then(response => {
      console.log(response.data);
    })
  }


  axios.get(apiURl + '/gameLog', {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
    .then(response => {
      console.log(response.data);
      setReport(response.data);
    })
    .catch(error => console.log(error));

  const hasRankData = props.rank && Array.isArray(props.rank) && props.rank.length > turnNumber;
  const rankData = hasRankData ? props.rank[turnNumber] : null;

  return (
    <main>
      <div className={styles.title}>
        <Typography>
          <Image src={winner} alt='winner' width={30} /> {nickName}님 총 수익<Image src={winner} alt='winner' className={styles.party} width={30} />
        </Typography>
      </div>
      <div className={styles.main}>
        <Card sx={{ boxShadow: 3 }}>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ marginTop: 2 }}>
            <Button onClick={() => setReport(true)}>보유 자산 변동 그래프</Button>
            <Button onClick={() => setReport(false)}>상세 매매 내역</Button>
          </ButtonGroup>
          {report ? <Graph /> : <History />}

        </Card>
        <Card sx={{ boxShadow: 3 }}>
          <CardContent className={styles.rankTitle}>
            <Typography><Image src={party} alt='party' width={30} />랭킹</Typography>
          </CardContent>
          <RankList rank={rankData} />
        </Card>
      </div>
      <div className={styles.footer}>
        <Image
          src={profit}
          alt='bed'
          width={600}
          height={130}
          className={styles.pic}
          loading="lazy">
        </Image>
        <Button onClick={() => { handleRedis() }} variant="outlined" className={styles.finish}>종료</Button>
      </div>

    </main>
  );
};

export default ResultPage;