import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { API_BASE_URL } from "../config/config";
import { useNavigate } from "react-router-dom";


function App({ user }) {

    const [orders, setOtders] = useState([]);

    const navigate = useNavigate();

    // 사용자가 바뀔떄마다 갱신
    useEffect(() => {
        if (user && user?.id) {
            fetchOrdertProducts();
        }
    }, [user]);

    const fetchOrdertProducts = async () => {
        try {
            const url = `${API_BASE_URL}/order/list/${user.id}`;
            const response = await axios.get(url);
            console.log('주문 내역 조회');
            console.log(response.data);

        } catch (error) {
            console.log('주문 내역 조회 오류 :', error);
            alert('주문 내역이 없어 상품 목록으로 이동합니다');
            navigate('/product/list');
        }
    };


    return (
        <Container className="mt-4">
            <h2 className="mb-4">
                {/* xxrem은 주위 글꼴의 xx배를 의미합니다 */}
                <span style={{ color: 'blue', fontSize: '2rem' }}>{user?.name}</span>
                <span style={{ fontSize: '1.3rem' }}>님의 주문 내역</span>
            </h2>
        </Container>
    );
}

export default App;