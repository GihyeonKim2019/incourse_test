import styled from "styled-components";
import todayStoryThumbnail from "../images/today_story_thumbnail.png";
import iconArrowLeft from "../images/icon_arrow_left.png";
import { Link } from "react-router-dom";

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
      <div className="incourse-introduce-div">
        <div className="incourse-introduce-header-text">What's Incourse?</div>
        <div className="incourse-introduce-contentdiv">
          <div className="incourse-introduce-content-text">
            인코스는 글로벌 기준 가장 효율적인 방법으로 비즈니스를 성공시킬 수
            있는 프리미엄 정보를 극소수의 사람에게 제공하는 뉴스레터입니다. 매일
            오전 11시에 100개의 한정 수량이 오픈되며, 소진 시 열람이 불가합니다.
          </div>
          <Link to={"/us"} className="incourse-introduce-content-buttondiv">
            <div className="incourse-introduce-content-button-text">
              더 알아보기
            </div>
            <img
              src={iconArrowLeft}
              className="incourse-introduce-content-button-logo"
            />
          </Link>
        </div>
      </div>
    </WholeDiv>
  );
}

export default Home;

const WholeDiv = styled.div`
  a {
    text-decoration: none;
  }

  .today-story-div {
    max-width: 1200px;
    margin: 0 auto;
    .today-story-header-text {
      font-size: 32px;
      font-weight: 600;
      margin-top: 60px;
    }
    .today-story-time {
      font-size: 18px;
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

      .today-story-title {
        font-size: 28px;
        line-height: 34px;
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
          line-height: 18px;
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
        margin-bottom: 40px;

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
        font-size: 18px;
        line-height: 22px;
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
          font-size: 28px;
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

  .incourse-introduce-div {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 90px;
    margin-bottom: 90px;

    .incourse-introduce-header-text {
      font-size: 32px;
      font-weight: 600;
    }

    .incourse-introduce-contentdiv {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;

      .incourse-introduce-content-text {
        flex-basis: 700px;
        font-size: 18px;
        line-height: 22px;
      }

      .incourse-introduce-content-buttondiv {
        flex-basis: 340px;
        height: 80px;
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .incourse-introduce-content-button-text {
          color: white;
          font-size: 18px;
          font-weight: 700;
          margin-left: 30px;
        }

        .incourse-introduce-content-button-logo {
          width: 18px;
          margin-right: 30px;
        }
      }
    }
  }
`;
