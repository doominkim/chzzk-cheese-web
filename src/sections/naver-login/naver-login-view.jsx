import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function NaverLoginView() {
  // useHistory 훅을 사용해 history 객체를 가져옵니다. 이 객체를 사용하여 라우터 내에서 리다이렉션을 수행할 수 있습니다.

  useEffect(() => {
    const processNaverLogin = async () => {
      // URL의 해시 부분에서 query parameter들을 추출합니다. 이 값들은 access_token, state, token_type, expires_in과 같은 인증 관련 정보를 포함합니다.
      const queryParams = window.location.hash.substring(1).split('&');
      const params = {};
      // console.log(window.location); //Location {ancestorOrigins: DOMStringList, href: 'http://52.78.41.110/api/auth/naverLogin#access_token…57-eb93287b5f70&token_type=bearer&expires_in=3600', origin: 'http://52.78.41.110/api', protocol: 'http:', host: 'localhost/api', …}
      // console.log(window.location.hash); //#access_token=AAAAOJ2B7*************&state=4b53e1ff-4b37-44f4-b857-eb93287b5f70&token_type=bearer&expires_in=3600
      // console.log(queryParams); //['access_token=AAAAOJ2B7*************', 'state=4b53e1ff-4b37-44f4-b857-eb93287b5f70', 'token_type=bearer', 'expires_in=3600']

      queryParams.forEach((param) => {
        const [key, value] = param.split('=');
        params[key] = value;
      });

      console.log(params);

      try {
        // const my = await axios.get('https://openapi.naver.com/v1/nid/me', {
        //   headers: {
        //     Authorization: `Bearer ${params.access_token}`,
        //   },
        // });
        console.log(params.access_token);

        const response = await axios.post(
          `http://52.78.41.110/api/auth/login/naver?accessToken=${params.access_token}`
        );

        if (response.data.status === 'failure') {
          if (response.data.errorCode === '502') {
            alert('치즈봇 계정으로 로그인 하세요');
          }
        }
        // window.location.href = '/'; // 인덱스 페이지로 이동
      } catch (error) {
        // console.error(error);
      }
    };

    processNaverLogin();
  }, []);

  return <div>Processing Naver Login...</div>;
}
