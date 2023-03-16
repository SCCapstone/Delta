import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import NotificationNews from "./NotificationNews";
import NotificationWhatsHot from "./NotificationWhatsHot";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./dashboard.css";
import axios from "axios";

const Dashboard = (props) => {

  const [arrNotificationNews,setArrNotificationNews] = useState([]);
  const [arrNotificationWhatsHot,setArrNotificationWhatsHot] = useState([]);

  const data = []

  const getNotificationNews = () =>{
    axios.get('/api/notification_news/get_unread',{headers:{'Content-Type':'application/json','Authorization': `Token ${props.auth.token}`}})
    .then((res)=>{
      setArrNotificationNews(res.data);
    })
  }
  const getNotificationWhatsHot = () =>{
    axios.get('/api/notification_whats_hot/get_unread',{headers:{'Content-Type':'application/json','Authorization': `Token ${props.auth.token}`}})
    .then((res)=>{
      setArrNotificationWhatsHot(res.data);
    })
  }

  useEffect(()=>{
    getNotificationNews();
    getNotificationWhatsHot();
  },[])

  const removeNotificationNews = (id) =>{
    let newNotifs = arrNotificationNews.filter(item=>item.id != id);
    setArrNotificationNews(newNotifs);
  }

  const removeNotificationWhatsHot = (id) =>{
    let newNotifs = arrNotificationWhatsHot.filter(item=>item.id != id);
    setArrNotificationWhatsHot(newNotifs);
  }

  if(props.auth.user.username == undefined) return;

  return(
      <div className="container">
        <h1>
          Welcome back <strong>{props.auth.user.username}</strong>.
        </h1>
        <h3>Here's what you've missed.</h3>

        <div>
          <h5>Recent News in Delta</h5>
          {arrNotificationNews.length !=0 ? 
          (
            <div
              className="box shadow-sm rounded bg-light mb-3 border border-gray"
              style={{ height: "40vh" }}
            >
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              {arrNotificationNews.map((data, index) => (
                <SwiperSlide key={index}>
                  <NotificationNews
                    parentRemoveNotif = {removeNotificationNews}
                    notif={data}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          )
          :
          (
            <div>
              <p>Looks like you're all caught up. Well done!</p>
            </div>
          ) 
          }
        </div>

        <div>
          <h5>Whats Hot in Delta</h5>
          {arrNotificationWhatsHot.length !=0 ? 
          (
            <div
              className="box shadow-sm rounded bg-light mb-3 border border-gray"
              style={{ height: "40vh" }}
            >
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              {arrNotificationWhatsHot.map((data, index) => (
                <SwiperSlide index={index}>
                  <NotificationWhatsHot
                    parentRemoveNotif = {removeNotificationWhatsHot}
                    notif={data}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          )
          :
          (
            <div>
              <p>Looks like you're all caught up. Well done!</p>
            </div>
          ) 
          }
        </div>

      </div>
  ) 
}


const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps,{})(Dashboard);
