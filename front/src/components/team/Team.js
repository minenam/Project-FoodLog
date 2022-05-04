import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../../css/team/Team.css'
import Github from '../../images/team/GitHubMark.png'
import Junsu from '../../images/team/Junsu.jpg'
import Hyemin from '../../images/team/Hyemin.jpg'
import Hyeju from '../../images/team/Hyeju.jpg'
import Kwanho from '../../images/team/Kwanho.jpg'
import Jongchan from '../../images/team/Jongchan.jpg'
import Sangun from '../../images/team/Sangun.jpg'


function Team() {

  return (
      <div id="teamInfo">
          <div class="members">
              <ul>
                  <li>
                      <img class="profilePic" src={Junsu} alt="junsu-profile-pic"></img>
                      <h2>장준수</h2>
                      <p>Leader, BE</p>
                      <div>
                          <img src={Github} alt="github-icon"></img>
                          <a href="https://github.com/jjs0211">jjs0211</a>
                      </div>
                  </li>
                  <li>
                      <img class="profilePic" src={Hyemin} alt="hyemin-profile-pic"></img>
                      <h2>남혜민</h2>
                      <p>BE</p>
                      <div>
                          <img src={Github} alt="github-icon"></img>
                          <a href="https://github.com/minenam">minenam</a>
                      </div>
                  </li>
                  <li>
                      <img class="profilePic" src={Hyeju} alt="hyeju-profile-pic"></img>
                      <h2>선혜주</h2>
                      <p>BE</p>
                      <div>
                          <img src={Github} alt="github-icon"></img>
                          <a href="https://github.com/hyejuseon">HyeJuSeon</a>
                      </div>
                  </li>
                  <li>
                      <img class="profilePic" src={Kwanho} alt="kwanho-profile-pic"></img>
                      <h2>김관호</h2>
                      <p>FE</p>
                      <div>
                          <img src={Github} alt="github-icon"></img>
                          <a href="https://github.com/KwanHoo">KwanHoo</a>
                      </div>
                  </li>
                  <li>
                      <img class="profilePic" src={Jongchan} alt="jongchan-profile-pic"></img>
                      <h2>노종찬</h2>
                      <p>FE</p>
                      <div>
                          <img src={Github} alt="github-icon"></img>
                          <a href=""></a>
                      </div>
                  </li>
                  <li>
                      <img class="profilePic" src={Sangun} alt="sangun-profile-pic"></img>
                      <h2>박상언</h2>
                      <p>FE</p>
                      <div>
                          <img src={Github} alt="github-icon"></img>
                          <a href=""></a>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  )

}

export default Team