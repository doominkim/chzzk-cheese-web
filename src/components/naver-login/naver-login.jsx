import { useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';

const NaverLogin = forwardRef(({ type }) => {
  const { naver } = window;
  const NAVER_CLIENT_ID = '1VlPoypxb0OF82jiTVO6'; // 발급 받은 Client ID 입력
  const NAVER_CALLBACK_URL = 'http://52.78.41.110:3030/auth/naverLogin'; // 작성했던 Callback URL 입력

  // 네이버 로그인 기능 및 버튼 구현
  const naverLogin = new naver.LoginWithNaverId({
    clientId: NAVER_CLIENT_ID, // Naver Developer 에 있는 Client ID
    callbackUrl: NAVER_CALLBACK_URL, // 요청 보냈을때 네이버에서 응답해 줄 주소
    isPopup: false, // 네이버 로그인 확인 창을 팝업으로 띄울지 여부
    loginButton: {
      color: 'green', // green, white
      type: type === undefined ? 3 : type, // 1: 작은버튼, 2: 중간버튼, 3: 큰 버튼
      height: 35, // 크기는 높이로 결정한다.
    },
  });

  useEffect(() => {
    naverLogin.init();
  });

  return (
    <>
      {/* 로그인 버튼 요청 URI
        https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id="************";&state=74075dc6-cfeb-40f9-87c5-d144e34a3983&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2FnaverLogin&version=js-2.0.0&svctype=1
        응답
        http://52.78.41.110/api/auth/naverLogin#access_token=AAAAOJVd5J9VsZr4FoB************&state=74075dc6-cfeb-40f9-87c5-d144e34a3983&token_type=bearer&expires_in=3600 */}
      <div id="naverIdLogin" />
    </>
  );
});

NaverLogin.propTypes = {
  type: PropTypes.number,
};

export default NaverLogin;
