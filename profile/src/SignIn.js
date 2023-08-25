import './SignUp.css';
import { Link } from 'react-router-dom';
function SignIn() {
    return (
        <div className="App">
            <div className="whiteBox">
                <h1>로그인</h1>
                    <div className="label-input-container">
                    <label htmlFor="username">아이디</label>
                    <input placeholder="Enter Id" id="username"></input>
                    </div>

                    <div className="label-input-container">
                    <label htmlFor="password">비밀번호</label>
                    <input placeholder="Enter PassWord" id="password" type="password"></input>
                    </div>

                    <button>로그인</button>
                <Link to="/SignUp" style={{ textDecoration: "none" }}>
                    <button className="register">회원가입</button>
                </Link>
            </div>
        </div>
    )
}

export default SignIn;