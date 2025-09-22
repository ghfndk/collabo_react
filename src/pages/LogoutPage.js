import axios from "axios";
import { useEffect } from "react";
import { API_BASE_URL } from "../config/config";
import { useNavigate } from "react-router-dom";

function App({ setUser }) {
    const navigate = useNavigate();

    useEffect(() => {
        const url = `${API_BASE_URL}/member/logout`;

        axios.post(url)
            .then(() => {

                localStorage.removeItem('user');
                setUser(null);
                console.log('로그인 성공');
                navigate(`/member/login`);
            })
            .catch((error) => {
                console.log('로그 아웃 실패', error);
            });

    }, []);

    return (
        <>
            로그아웃 중입니다...
        </>
    );
}

export default App;