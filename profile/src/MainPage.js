import './MainPage.css';

function MainPage() {
    return (
        <div className="App">
            <div className="left">
                <div className="whiteBox1">
                    <button className="mainButton">홈</button>
                    <button className="mainButton">사용자</button>
                    <button className="mainButton">최근 본 유저</button>
                    <div className='logout'><h2>Log out</h2></div>
                </div>
            </div>
            <div className="right">
                <div className="whiteBox2">
                    <div className="topBox">
                        
                        <div className="Box1">
                            <h1 className="userInfo">User Info</h1>
                            <img clasName="imageBox" src="https://image.fmkorea.com/files/attach/new3/20230215/486616/3142461990/5496886390/26cda043313a710b7e1fe63b30f730fe.jpg" 
                            style={{ border:  '1px solid rgba(0, 0, 0, 0.05)'}} width="80%"/>
                            <label className="imageUpload" for="input-file">이미지 업로드</label>
                            <input type="file" id="input-file" style={{display:"none"}} />
                        </div>   

                        <div className="Box2">
                            <h2 className="Name" >이름</h2>
                            <input className="nameText" type='text' placeholder='이름을 입력하세요'></input>
                            <h2 className="birth">생년월일</h2>
                            <div className="birthBox">
                                <select value="year" className="yearSelect">
                                    <option value="none">선택하세요</option>
                                </select>
                                <h3>년</h3>
                                <select>
                                    <option value="none">선택하세요</option>
                                </select>
                                <h3>월</h3>
                                <select>
                                    <option value="none">선택하세요</option>
                                </select>
                                <h3>일</h3>
                            </div>
                        </div>        
                        <div className="Box3"></div>    
                    </div>    

                    <div className="bottomBox">
                        
                        <div className="Box4">
                            <input className="smallText" type='text'></input>
                            <input className="largeText" type='text'></input>
                        </div>       
                        <div className="Box5"></div> 
                        
                    </div>           
                </div>
            </div>
        </div>
    )
}

export default MainPage;