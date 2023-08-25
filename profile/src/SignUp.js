import './SignUp.css';
function SignUp() {
    return (
        <div className="App">
            <div className="whiteBox">
                <h1>회원가입</h1>
                    <div className="label-input-container">
                    <label htmlFor="username">아이디 입력</label>
                    <input placeholder="Enter Id" id="username"></input>
                    </div>

                    <div className="label-input-container">
                    <label htmlFor="password">비밀번호 입력</label>
                    <input placeholder="Enter PassWord" id="password" type="password"></input>
                    </div>

                    <div className="label-input-container">
                    <label htmFro="checkPassword">비밀번호 확인</label>
                    <input placeholder="Enter password one more time" id="checkPassword" type="password"></input>
                    </div>

                <button>등록</button>
            </div>
        </div>
    )
}

export default SignUp;