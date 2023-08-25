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
                                    <option value="2000">2000</option>
                                    <option value="2001">2001</option>
                                    <option value="2002">2002</option>
                                    <option value="2003">2003</option>
                                    <option value="2004">2004</option>
                                    <option value="2005">2005</option>
                                    <option value="2006">2006</option>
                                    <option value="2007">2007</option>
                                    <option value="2008">2008</option>
                                </select>
                                <h3>년</h3>
                                <select value="month">
                                    <option value="none">선택하세요</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>

                                </select>
                                <h3>월</h3>
                                <select value="day">
                                    <option value="none">선택하세요</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>

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