import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import axios from 'axios';
import "./profile.css";

<script src="https://kit.fontawesome.com/f45b95bc62.js" crossorigin="anonymous"></script>
const ProfileGlance = (props) => {
    //This is the rendering for the profile at a glance page.
    const { isAuthenticated, user } = props.auth; //Making sure that its the specific user thats information is displayed
    const [style,setStyle] = useState({width: '54px', height: '33px', position: 'absolute', verticalAlign: 'middle', marginTop: '33px', marginLeft: '-77px', border: '0px', fontWeight: 'bold', fontStyle: 'normal', fontVariant: 'normal', fontStretch: 'normal', fontSize: '20px', lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(224, 107, 125)', padding: '0px', WebkitAppearance: 'none', background: 'none'}) 
    if (user.followed_organizations == null) return;
    return (
        //This is the main container that holds the information. User can view all their information without editing the
        //fields. They can view their organizations and click on the link to go to their organizations page.
        
//<div>
        <div className='container bootstrap snippets bootdey'>
            <div className="row">
                <div className="profile-nav col-md-3">
                    <div className="panel">
                        <div className="user-heading round">
                            {/* <a href="#">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                            </a> */}
                            <h1>{user.first_name} {user.last_name}</h1>
                            <p>{user.email}</p>
                        </div>

          <ul className="nav nav-pills flex-column">
              <li className="active"><a aria-current="page">Profile</a></li>
              <li><Link to={`/profile/${props.auth.user.username}`}>Public profile</Link></li>
              <li><Link to='/profile/detailed'>Edit profile</Link></li>
          </ul>
      </div>
  </div>
  <div className="profile-info col-md-9">
      <div className="panel">
          <div className="bio-graph-heading">
                {user.bio}
          </div>
          <div className="panel-body bio-graph-info">
              <h2>Basic Information</h2>
              <div className="row">
                  <div className="bio-row">
                      <p><span>First Name: </span> {user.first_name}</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Last Name: </span> {user.last_name}</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Username: </span> {user.username}</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Email:</span> {user.email}</p>
                  </div>
                  <h1>Your Organizations</h1>
                  <div class="row">
                    {(user.followed_organizations).map((item,index)=>(
                        <div class="col-sm-6">
                     <div className="card m-1 p-1" style={{width: '24rem'}} key={index}>
                        <img
                                        src='/media/Generic_Laboratory_Logo.png'
                                        className='card-img-top'
                                        alt='place holder text right now'
                                        width='200'
                                        height='200'
                                    />
                         <div className = "card-body">
                             
                             <h5 className="card-title">
                                 {item.name}
                             </h5>
                             
                             <p className = "card-text">
                                 {item.description}
                             </p>
                             <Link to = {`/community/organizations/${item.id}`} className="btn btn-primary"> View Organization</Link>
                         </div>
                     </div> 
                     </div>
                    ))}
                    
                 </div>
              </div>
          </div>
      </div>
      <br/><br/>
      <div>
          <div className="row">
            <h3 style={{textAlign: 'center'}}>Personal Community</h3>
              <div className="col-md-6">
                  <div className="panel">
                      <div className="panel-body">
                          <div className="bio-chart">
                              <div style={{display:'inline', width:'100px', height:'100px'}}><canvas width="100" height="100px"></canvas><input readOnly className="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="35" data-fgcolor="#e06b7d" data-bgcolor="#e8e8e8" style={style}/></div>
                          </div>
                          <div className="bio-desk">
                              <h4 className="red">Envato Website</h4>
                              <p>Started : 15 July</p>
                              <p>Deadline : 15 August</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="panel">
                      <div className="panel-body">
                          <div className="bio-chart">
                              <div style={{display:'inline', width:'100px', height:'100px'}}><canvas width="100" height="100px"></canvas><input readOnly className="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="63" data-fgcolor="#4CC5CD" data-bgcolor="#e8e8e8" style={style}/></div>
                          </div>
                          <div className="bio-desk">
                              <h4 className="terques">ThemeForest CMS </h4>
                              <p>Started : 15 July</p>
                              <p>Deadline : 15 August</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="panel">
                      <div className="panel-body">
                          <div className="bio-chart">
                              <div style={{display:'inline', width:'100px', height:'100px'}}><canvas width="100" height="100px"></canvas><input readOnly className="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="75" data-fgcolor="#96be4b" data-bgcolor="#e8e8e8" style={style}/></div>
                          </div>
                          <div className="bio-desk">
                              <h4 className="green">VectorLab Portfolio</h4>
                              <p>Started : 15 July</p>
                              <p>Deadline : 15 August</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="panel">
                      <div className="panel-body">
                          <div className="bio-chart">
                              <div style={{display:'inline', width:'100px', height:'100px'}}><canvas width="100" height="100px"></canvas><input readOnly className="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="50" data-fgcolor="#cba4db" data-bgcolor="#e8e8e8" style={style}/></div>
                          </div>
                          <div className="bio-desk">
                              <h4 className="purple">Adobe Muse Template</h4>
                              <p>Started : 15 July</p>
                              <p>Deadline : 15 August</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</div>






//  <div>
//                 {(user.followed_organizations).map((item,index)=>(
//                     <div className = "card" key={index}>
//                         <div className = "card-body">
//                             <Link to = {`/community/organizations/${item.id}`}>
//                             <h5 className="card-title">
//                                 {item.name}
//                             </h5>
//                             </Link>
//                             <p className = "card-text">
//                                 {item.description}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <br/>
        
//             <div>
//                 <Link className= "btn btn-info" to="/profile/detailed">
//                     Click Update Profile
//                 </Link>
//                 <br/>
//                 <br/>
//                 <Link className="btn btn-success" to={`/profile/${props.auth.user.username}`}>
//                     See your public profile
//                 </Link>
//             </div> 
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(ProfileGlance);