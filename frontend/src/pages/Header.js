import styled from "styled-components";
import logoTitleImg from "../images/logo_title.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <WholeDiv>
      <div className="logodiv">
        <Link to={"/"}>
          <div className="logoimgdiv"></div>
        </Link>
      </div>
      <div className="menudiv">
        <Link to={"/us"}>
          <div className="menuli">소개</div>
        </Link>
        <Link to={"/articles"}>
          <div className="menuli">트랙레터</div>
        </Link>
        <Link to={"/login"}>
          <div className="menuli">로그인</div>
        </Link>
      </div>
    </WholeDiv>
  );
}

export default Header;

const WholeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d80600;
  height: 50px;

  a {
    text-decoration: none;
  }

  .logodiv {
    .logoimgdiv {
      width: 170px;
      height: 22px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      background-image: url(${logoTitleImg});
    }
  }

  .menudiv {
    display: flex;
    align-items: center;

    .menuli {
      display: flex;
      width: 100px;
      justify-content: center;
      color: white;
    }
  }
`;
