import React from "react";

// import svg
import Star from "../../public/assets/star.svg";
import styled from "styled-components";

const ReviewWrapper = styled.div`
  padding: 14px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ReviewHeader = styled.div`
  padding-left: 16px;
  display: flex;
  gap: 8px;
  align-items: center;

  .profile {
    width: 40px;
    height: 40px;
    background: #d9d9d9;
    border-radius: 50%;
  }
  .review-info {
    display: flex;
    flex-direction: column;
    padding-top: 4px;
    justify-content: space-between;
    height: 100%;

    .review-user {
      color: #000;
      font-family: "Pretendard";
      font-size: 14px;
      font-weight: 500;
    }
    .review-star {
      height: 16px;
    }
  }
`;

const ReviewContentInfo = styled.div`
  color: #000;
  font-family: "Pretendard";
  font-size: 12px;
  font-weight: 400;
  padding: 8px 16px;
`;

interface Props {
  review: { [key: string]: any };
}

const ReviewContent = ({ review }: Props) => {
  return (
    <ReviewWrapper>
      <ReviewHeader>
        <div className="profile"></div>
        <div className="review-info">
          <div className="review-user">닉네임</div>
          <div className="review-star">
            {Array(review.star)
              .fill(0)
              .map((item, i) => (
                <Star width={12} height={12} key={i} color={"#FFBD31"} />
              ))}
            {Array(5 - review.star)
              .fill(0)
              .map((item, i) => (
                <Star width={12} height={12} key={i} color={"#DDDDDD"} />
              ))}
          </div>
        </div>
      </ReviewHeader>
      <ReviewContentInfo>{review.content}</ReviewContentInfo>
    </ReviewWrapper>
  );
};

export default ReviewContent;
