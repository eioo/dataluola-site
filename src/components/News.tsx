import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';

import config from '../config';
import { fetchNews } from '../services/ampparit';
import { INewsPost } from '../types';
import NewsPost from './NewsPost';

const NewsStyle = styled.div`
  margin: 0 auto;
  width: 750px;
  height: calc(70% - 25px);
  background: #f9f9f9;
  opacity: 0.8;
  border-radius: 10px 5px 5px 10px;

  @media screen and (max-height: 655px) {
    height: calc(100vh - 225px);
  }
`;

export default function News() {
  const [newsPosts, setNewsPosts] = useState([] as INewsPost[]);

  const newsFetcher = async () => {
    const news = await fetchNews(config.newsKeywords, 30);
    setNewsPosts(news);

    console.log('fetched');

    setTimeout(() => {
      newsFetcher();
    }, 5 * 60 * 1e3); // 5 minutes
  };

  useEffect(() => {
    newsFetcher();
  }, []);

  return (
    <NewsStyle>
      <Scrollbars>
        {newsPosts.map(({ link, timestamp, source, title }: INewsPost, i) => (
          <NewsPost
            key={i}
            link={link}
            timestamp={timestamp}
            source={source}
            title={title}
          />
        ))}
      </Scrollbars>
    </NewsStyle>
  );
}
