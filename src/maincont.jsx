import './maincont.css'
import hammad from'./img/hammad.jpg'
import threeDot from './img/three.png'
import cros from './img/cross.png'
import chat from './img/chat-comment.png'
import share from './img/share.png'
import like from './img/like.svg'
import likee from './img/like.png'
import commet from './img/comment.png'
import whatsapp from './img/whatsapp.png'
const MainContent = (props) => {
    return(
        <div className="container">
            <div className="maincontone">
                <div className="maincontone1">
                    <img src={hammad} alt="" />
                    <input type="text" placeholder='Whats on your mind, Hammad' />
                </div>
                <div className="mainCont2">
                    <div>
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeEtantEpbxDTFk7UWzp0jONueRic5Ym8Wm55GJzlibxaeZ1Pux4z6gIGHGrbeUtJ1xdjxKz4Jq5d0Li-tQDFBg6" alt="" />
                        <span>Live Video</span>
                    </div>
                    <div>
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeG3NI1ThqbNS8G6VxGIsFxRkBVQC4m7dx6QFVALibt3HpXX4QxdUR-9cPhqJO6Nsiz4_2zEdes2wfmaor1230Qg" alt="" />
                        <span>Photo/video</span>
                    </div>
                    <div>
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeG1rjMX8ghhE4ip_Ds_9XiqfPQ6N5_OUfV89Do3n85R9arwt6Dv2gMo4itBIFE7rCmJKvzZsLXNpQoCCa1FrhkJ" alt="" />
                        <span>Feeling/activity</span>
                    </div>
                </div>
            </div>
            <div className="mainThree">
                <div className="mainThree1">
                    <div className='mainThree1Child1'>
                    <img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/392884809_303358595977178_5353998706272227062_n.jpg?stp=c0.18.540.540a_dst-jpg_s100x100_tt6&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEVoSugJIsvSjs5LMgX3Lr1L5Eo1ikZ4SAvkSjWKRnhIJ2NPfdm5MbnOOAygY_niUbF3Og95o3ShyMQ2ftHmA1U&_nc_ohc=YBBcNR11HD8Q7kNvgEzVGbs&_nc_zt=24&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=AgszDEjxqc6X8gC3HkdWcje&oh=00_AYBhA8I3FgdOTnRctPfuEHugCszoHxQb-7CTn5mQz7h0dg&oe=67639A5E" alt="" />
                    <div id='hamm'>
                    <h3>Anand Pawar Official</h3>
                    {/* <span>Pushpa 2 Hindi Dubbed Full Movie</span> */}
                    <p>December 9 at 6:13 PM</p>
                    </div>
                    </div>
                    <div className="mainThree1Child2">
                        <img src={threeDot} alt="" width={50} />
                        <img src={cros} alt="" width={50}/>
                    </div>
                </div>
                <div className="mainThree2">
                    <img src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/469535220_1097169795394006_2278176166524097014_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFbztSNTDSYugr9CdsrB548m8NFVa1MEq-bw0VVrUwSr7kvpS8Zdrk43AQX-w0-27AExhnEB8104zefsZGpG4-F&_nc_ohc=mdKPsAlwOFkQ7kNvgE7-QMO&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=AEHMatSpFsMzfR12ZLbSXRS&oh=00_AYC1PsVnTBs3oweA4SXh3ErsNBLnp0WId3wFXZ7gNCZMUg&oe=6763A10C' alt="" />
                </div>
                <div className="mainThree3">
                    <div className="mainThree3Child1">
                        <img src={like} alt="" width={30}/>
                        <p>877</p>
                    </div>
                    <div className="mainThree3Child2">
                        <span>36</span>
                        <img src={chat} alt="" />
                        <span>19</span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className="mainThree4">
                    <div className="mainThree4child1">
                        <img src={likee} alt="" />
                        <span>Like</span>
                    </div>
                    <div className="mainThree4child2">
                        <img src={commet} alt="" />
                        <span>Comment</span>
                    </div>
                    <div className="mainThree4child3">
                        <img src={whatsapp} alt="" />
                        <span>Send</span>
                    </div>
                    <div className="mainThree4child4">
                        <img src={share} alt="" />
                        <span>Share</span>
                    </div>
                </div>
            </div>
            <div className="mainThree">
                <div className="mainThree1">
                    <div className='mainThree1Child1'>
                    <img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/392884809_303358595977178_5353998706272227062_n.jpg?stp=c0.18.540.540a_dst-jpg_s100x100_tt6&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEVoSugJIsvSjs5LMgX3Lr1L5Eo1ikZ4SAvkSjWKRnhIJ2NPfdm5MbnOOAygY_niUbF3Og95o3ShyMQ2ftHmA1U&_nc_ohc=YBBcNR11HD8Q7kNvgEzVGbs&_nc_zt=24&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=AgszDEjxqc6X8gC3HkdWcje&oh=00_AYBhA8I3FgdOTnRctPfuEHugCszoHxQb-7CTn5mQz7h0dg&oe=67639A5E" alt="" />
                    <div id='hamm'>
                    <h3>Anand Pawar Official</h3>
                    {/* <span>Pushpa 2 Hindi Dubbed Full Movie</span> */}
                    <p>December 9 at 6:13 PM</p>
                    </div>
                    </div>
                    <div className="mainThree1Child2">
                        <img src={threeDot} alt="" width={50} />
                        <img src={cros} alt="" width={50}/>
                    </div>
                </div>
                <div className="mainThree2">
                    <img src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/469535220_1097169795394006_2278176166524097014_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFbztSNTDSYugr9CdsrB548m8NFVa1MEq-bw0VVrUwSr7kvpS8Zdrk43AQX-w0-27AExhnEB8104zefsZGpG4-F&_nc_ohc=mdKPsAlwOFkQ7kNvgE7-QMO&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=AEHMatSpFsMzfR12ZLbSXRS&oh=00_AYC1PsVnTBs3oweA4SXh3ErsNBLnp0WId3wFXZ7gNCZMUg&oe=6763A10C' alt="" />
                </div>
                <div className="mainThree3">
                    <div className="mainThree3Child1">
                        <img src={like} alt="" width={30}/>
                        <p>877</p>
                    </div>
                    <div className="mainThree3Child2">
                        <span>36</span>
                        <img src={chat} alt="" />
                        <span>19</span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className="mainThree4">
                    <div className="mainThree4child1">
                        <img src={likee} alt="" />
                        <span>Like</span>
                    </div>
                    <div className="mainThree4child2">
                        <img src={commet} alt="" />
                        <span>Comment</span>
                    </div>
                    <div className="mainThree4child3">
                        <img src={whatsapp} alt="" />
                        <span>Send</span>
                    </div>
                    <div className="mainThree4child4">
                        <img src={share} alt="" />
                        <span>Share</span>
                    </div>
                </div>
            </div>
            <div className="mainThree">
                <div className="mainThree1">
                    <div className='mainThree1Child1'>
                    <img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/392884809_303358595977178_5353998706272227062_n.jpg?stp=c0.18.540.540a_dst-jpg_s100x100_tt6&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEVoSugJIsvSjs5LMgX3Lr1L5Eo1ikZ4SAvkSjWKRnhIJ2NPfdm5MbnOOAygY_niUbF3Og95o3ShyMQ2ftHmA1U&_nc_ohc=YBBcNR11HD8Q7kNvgEzVGbs&_nc_zt=24&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=AgszDEjxqc6X8gC3HkdWcje&oh=00_AYBhA8I3FgdOTnRctPfuEHugCszoHxQb-7CTn5mQz7h0dg&oe=67639A5E" alt="" />
                    <div id='hamm'>
                    <h3>Anand Pawar Official</h3>
                    {/* <span>Pushpa 2 Hindi Dubbed Full Movie</span> */}
                    <p>December 9 at 6:13 PM</p>
                    </div>
                    </div>
                    <div className="mainThree1Child2">
                        <img src={threeDot} alt="" width={50} />
                        <img src={cros} alt="" width={50}/>
                    </div>
                </div>
                <div className="mainThree2">
                    <img src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/469535220_1097169795394006_2278176166524097014_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFbztSNTDSYugr9CdsrB548m8NFVa1MEq-bw0VVrUwSr7kvpS8Zdrk43AQX-w0-27AExhnEB8104zefsZGpG4-F&_nc_ohc=mdKPsAlwOFkQ7kNvgE7-QMO&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=AEHMatSpFsMzfR12ZLbSXRS&oh=00_AYC1PsVnTBs3oweA4SXh3ErsNBLnp0WId3wFXZ7gNCZMUg&oe=6763A10C' alt="" />
                </div>
                <div className="mainThree3">
                    <div className="mainThree3Child1">
                        <img src={like} alt="" width={30}/>
                        <p>877</p>
                    </div>
                    <div className="mainThree3Child2">
                        <span>36</span>
                        <img src={chat} alt="" />
                        <span>19</span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className="mainThree4">
                    <div className="mainThree4child1">
                        <img src={likee} alt="" />
                        <span>Like</span>
                    </div>
                    <div className="mainThree4child2">
                        <img src={commet} alt="" />
                        <span>Comment</span>
                    </div>
                    <div className="mainThree4child3">
                        <img src={whatsapp} alt="" />
                        <span>Send</span>
                    </div>
                    <div className="mainThree4child4">
                        <img src={share} alt="" />
                        <span>Share</span>
                    </div>
                </div>
            </div>
            <div className="mainThree">
                <div className="mainThree1">
                    <div className='mainThree1Child1'>
                    <img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/392884809_303358595977178_5353998706272227062_n.jpg?stp=c0.18.540.540a_dst-jpg_s100x100_tt6&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEVoSugJIsvSjs5LMgX3Lr1L5Eo1ikZ4SAvkSjWKRnhIJ2NPfdm5MbnOOAygY_niUbF3Og95o3ShyMQ2ftHmA1U&_nc_ohc=YBBcNR11HD8Q7kNvgEzVGbs&_nc_zt=24&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=AgszDEjxqc6X8gC3HkdWcje&oh=00_AYBhA8I3FgdOTnRctPfuEHugCszoHxQb-7CTn5mQz7h0dg&oe=67639A5E" alt="" />
                    <div id='hamm'>
                    <h3>Anand Pawar Official</h3>
                    {/* <span>Pushpa 2 Hindi Dubbed Full Movie</span> */}
                    <p>December 9 at 6:13 PM</p>
                    </div>
                    </div>
                    <div className="mainThree1Child2">
                        <img src={threeDot} alt="" width={50} />
                        <img src={cros} alt="" width={50}/>
                    </div>
                </div>
                <div className="mainThree2">
                    <img src='https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/469535220_1097169795394006_2278176166524097014_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFbztSNTDSYugr9CdsrB548m8NFVa1MEq-bw0VVrUwSr7kvpS8Zdrk43AQX-w0-27AExhnEB8104zefsZGpG4-F&_nc_ohc=mdKPsAlwOFkQ7kNvgE7-QMO&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=AEHMatSpFsMzfR12ZLbSXRS&oh=00_AYC1PsVnTBs3oweA4SXh3ErsNBLnp0WId3wFXZ7gNCZMUg&oe=6763A10C' alt="" />
                </div>
                <div className="mainThree3">
                    <div className="mainThree3Child1">
                        <img src={like} alt="" width={30}/>
                        <p>877</p>
                    </div>
                    <div className="mainThree3Child2">
                        <span>36</span>
                        <img src={chat} alt="" />
                        <span>19</span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className="mainThree4">
                    <div className="mainThree4child1">
                        <img src={likee} alt="" />
                        <span>Like</span>
                    </div>
                    <div className="mainThree4child2">
                        <img src={commet} alt="" />
                        <span>Comment</span>
                    </div>
                    <div className="mainThree4child3">
                        <img src={whatsapp} alt="" />
                        <span>Send</span>
                    </div>
                    <div className="mainThree4child4">
                        <img src={share} alt="" />
                        <span>Share</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;