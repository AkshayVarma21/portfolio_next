import * as React from 'react';
import { skills } from '../../data/constants';
import styled from 'styled-components';
import Slider from 'react-slick'; // Importing react-slick

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ArticlesContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  position: relative;
`;

const Article = styled.a`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #800020;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  text-decoration: none; /* Remove underline */
  
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }

  &:hover {
    color: ${({ theme }) => theme.text_secondary}; /* Change text color on hover */
  }
`;

const ArticleTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  white-space: nowrap;         
  overflow: hidden;            
  text-overflow: ellipsis;
  text-align: center;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;            
  text-overflow: ellipsis;
  height: 80px;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const articles = [
  {
    title: 'Mitigating XSS Risks: Best Practices for Web Applications',
    url: 'https://dev.to/akshay_varma/mitigating-xss-risks-best-practices-for-web-applications-2e04',
    content: `What is Cross-Site Scripting (XSS)?
              As web development evolves, the risks associated with protecting web applications are also increasing. One of the most significant and growing threats today is Cross-Site Scripting (XSS).`,
  },
  {
    title: 'Article 2',
    url: 'https://dev.to/akshay_varma/mitigating-xss-risks-best-practices-for-web-applications-2e04',
    content: 'This is the second article content. It could be a summary or description.',
  },
  // {
  //   title: 'Article 3',
  //   url: '',
  //   content: 'This is the third article content. It could be a summary or description.',
  // },
  // {
  //   title: 'Article 4',
  //   url: '',
  //   content: 'This is the fourth article content. It could be a summary or description.',
  // },
];

export default function ArticleCard() {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container id="articles">
      <Title>Articles</Title>
      <Desc>
        Explore some of the latest articles on various topics.
      </Desc>

      {/* Carousel Container */}
      <ArticlesContainer>
        <Slider {...settings}>
          {articles.map((article) => (
            <Article key={article.title} href={article.url} target="_blank" rel="noopener noreferrer">
              <ArticleTitle>{article.title}</ArticleTitle>
              <SkillItem>
                {article.content}
              </SkillItem>
            </Article>
          ))}
        </Slider>
      </ArticlesContainer>
    </Container>
  );
}
