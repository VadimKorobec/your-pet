import React, { useState } from 'react';
import newsData from './news.json';
import {
  Card,
  Wrapper,
  Title,
  Content,
  Link,
  WrapImg,
  Img,
  Input,
} from './NewsItem.styled';

export const NewsItem = () => {
  // const [news] = useState(newsData.news);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = newsData.news.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Поиск новостей"
      />
      <Wrapper>
        {filteredNews.map((item, id) => (
          <Card key={id}>
            <WrapImg>
              <Img
                src={item.imgUrl}
                alt={item.title}
                loading="lazy"
                width="280"
              />
            </WrapImg>
            <Title>{item.title}</Title>
            <Content>{item.text}</Content>
            <p>{item.date}</p>
            <Link href={item.url} target="blank">
              Read more
            </Link>
            <hr />
          </Card>
        ))}
      </Wrapper>
    </>
  );
};

export default NewsItem;
