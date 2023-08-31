import styled from "styled-components";
import todayStoryThumbnail from "../images/today_story_thumbnail.png";

function Home() {
  return (
    <WholeDiv>
      <div className="today-story-div">
        <div className="today-story-header-text">오늘의 스토리</div>
        <div className="today-story-time">2023.08.27(수) 11:00:00</div>
        <div className="today-story-contentdiv">
          <div className="today-story-leftdiv">
            <img className="today-story-image" src={todayStoryThumbnail} />
            <div className="today-story-title">
              23살에 음료수 브랜드를 월 110만 달러 규모로 성장시킨 비결
            </div>
          </div>
          <div className="today-story-centerdiv"></div>
          <div className="today-story-rightdiv">
            <div className="ticket-info-div">
              <div className="ticket-count-text">11명 남았어요!</div>
              <div className="ticket-info-text">
                인코스의 스토리는 하루 동안만 오픈되며, 매일 100명만 읽을 수
                있습니다.
              </div>
            </div>
            <div>
              <div className="division-line"></div>
              <div className="business-info-title">사업 정보</div>
              <div className="business-info-div">
                <div className="business-info-li">
                  <div className="business-info-li-text">월 순익</div>
                  <div className="business-info-li-subtext">
                    $12,000,000 Revenue/mo
                  </div>
                </div>
                <div className="business-info-li">
                  <div className="business-info-li-text">공동창업자 수</div>
                  <div className="business-info-li-subtext">1</div>
                </div>
                <div className="business-info-li">
                  <div className="business-info-li-text">현재 직원 수</div>
                  <div className="business-info-li-subtext">57</div>
                </div>
              </div>
              <div className="apex-title-text">Apex moment</div>
              <div className="apex-content-text">
                수요를 검증하기 위해 가장 먼저 했던 일은 000, 실제 출시 한 달
                만에 12만 달러의 매출을 일으킨 방법은 000, 19%의 높은 재구매율을
                달성했던 방법은 000, 고객들의 CRM정보를 수집하는 데 가장
                효과적인 방법은 000였어요.
              </div>
              <div className="join-button-div">
                <div className="join-button-text">읽기</div>
              </div>
              <div className="join-info-div">
                <div className="join-info-time">08:11:19</div>
                <div className="join-info-text">후 열람 불가</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WholeDiv>
  );
}

export default Home;

const WholeDiv = styled.div`
  .today-story-div {
    max-width: 1200px;
    margin: 0 auto;
    .today-story-header-text {
      font-size: 40px;
      font-weight: 600;
      margin-top: 60px;
    }
    .today-story-time {
      font-size: 22px;
      margin-top: 18px;
    }
    .today-story-contentdiv {
      margin-top: 18px;
      display: flex;
    }

    .today-story-leftdiv {
      flex-basis: 540px;
      flex-shrink: 1;

      .today-story-image {
        width: 100%;
      }

      //   .today-story-image {
      //     display: flex;
      //     background-color: blue;

      //     // min-width: 40px;
      //     // min-height: 40px;
      //     // background-repeat: no-repeat;
      //     width: 100%;
      //     background-size: cover;
      //     background-image: url(${todayStoryThumbnail});
      //   }

      .today-story-title {
        font-size: 36px;
        font-weight: 600;
        margin-top: 35px;
      }
    }

    .today-story-centerdiv {
      flex-basis: 95px;
    }

    .today-story-rightdiv {
      background-color: #f6f6f6;
      padding: 35px 40px;
      flex-basis: 500px;
      flex-shrink: 1;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .ticket-info-div {
        .ticket-count-text {
          color: #d80600;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 13px;
        }
        .ticket-info-text {
          margin-bottom: 23px;
        }
      }

      .division-line {
        border-top: 1px solid #444444;
        margin-bottom: 16px;
      }

      .business-info-title {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 23px;
      }

      .business-info-div {
        .business-info-li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 11px;
          .business-info-li-text {
            font-size: 16px;
            font-weight: 600;
          }
          .business-info-li-subtext {
            font-size: 16px;
            font-weight: 400;
          }
        }
      }

      .apex-title-text {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 26px;
      }

      .apex-content-text {
        font-size: 16px;
        margin-bottom: 23px;
      }

      .join-button-div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d80600;
        height: 85px;
        margin-bottom: 23px;

        .join-button-text {
          font-size: 40px;
          font-weight: 600;
          color: white;
        }
      }

      .join-info-div {
        display: flex;
        justify-content: end;
        font-size: 16px;

        .join-info-time {
          color: #d70500;
        }
      }
    }
  }
`;
