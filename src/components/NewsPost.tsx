import styled from '@emotion/styled';
import dateFormat from 'dateformat';
import React from 'react';

const NewsPostStyle = styled.a`
  display: grid;
  grid-template-columns: 45px 160px 1fr;
  align-items: center;
  margin-bottom: 3px;
  padding: 10px 20px;

  color: #4c3262;
  text-decoration: none;
  margin-right: 15px;
  margin-left: 10px;
  user-select: none;
  border-bottom: 2px solid #ededed;
`;

const Date = styled.div`
  justify-self: center;
`;

const SourceName = styled.div`
  justify-self: center;
  text-align: center;
`;

const PostTitle = styled.div`
  &:hover {
    color: #8935d5;
  }
`;

interface INewsPostProps {
  link: string;
  timestamp: number;
  source: string;
  title: string;
}

export default function NewsPost({
  link,
  timestamp,
  source,
  title,
}: INewsPostProps) {
  return (
    <NewsPostStyle href={link}>
      <Date>{dateFormat(timestamp * 1e3, 'HH:MM dd.mm.')}</Date>
      <SourceName>{source}</SourceName>
      <PostTitle>{title}</PostTitle>
    </NewsPostStyle>
  );
}
