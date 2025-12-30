import React,{useState,useEffect, useContext} from 'react'
import styles from './History.module.css'
import { Skeleton } from '@mui/material';
import WithAuthHoc from '../../Utils/HOC/WithAuthHoc';
import axios from '../../Utils/axios.js';
import { AuthContext } from '../../Utils/AuthContext.jsx';

const History = () => {
  const [data,setdata]=useState([]);
  const [loader, setLoader] = useState(false)
  const userInfo=useContext(AuthContext)
  useEffect(() => {
    const fetchUserData = async () => {
      try{
        const result=await axios.get(`/api/resume//getResumes/${userInfo?._id}`)
      }catch(error){
        console.log("Error fetching history data",error);
        alert("Error fetching history data");
      }


    }
    fetchUserData();
  }, []);
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>
        <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={260} height={200} />   
      <div className={styles.HistoryCard}>
        <div className={styles.CardPercentage}>80%</div>
        <h2>Front End Developer</h2>
        <p>Resume Name : Resume.pdf</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere possimus ratione deserunt fuga asperiores? Saepe repudiandae, reprehenderit aspernatur iure aperiam beatae, sint natus ex nulla facilis nobis quia iste sapiente.</p>
        <p>Dated :2025-11-08</p>
      </div>
      <div className={styles.Card}>
        <div className={styles.CardPercentage}>80%</div>
        <h2>Front End Developer</h2>
        <p>Resume Name : Resume.pdf</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere possimus ratione deserunt fuga asperiores? Saepe repudiandae, reprehenderit aspernatur iure aperiam beatae, sint natus ex nulla facilis nobis quia iste sapiente.</p>
        <p>Dated :2025-11-08</p>
      </div>
      <div className={styles.HistoryCard}>
        <div className={styles.CardPercentage}>80%</div>
        <h2>Front End Developer</h2>
        <p>Resume Name : Resume.pdf</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere possimus ratione deserunt fuga asperiores? Saepe repudiandae, reprehenderit aspernatur iure aperiam beatae, sint natus ex nulla facilis nobis quia iste sapiente.</p>
        <p>Dated :2025-11-08</p>
      </div>
      <div className={styles.HistoryCard}>
        <div className={styles.CardPercentage}>80%</div>
        <h2>Front End Developer</h2>
        <p>Resume Name : Resume.pdf</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere possimus ratione deserunt fuga asperiores? Saepe repudiandae, reprehenderit aspernatur iure aperiam beatae, sint natus ex nulla facilis nobis quia iste sapiente.</p>
        <p>Dated :2025-11-08</p>
      </div>
      </div>
    </div>
  )
}

export default WithAuthHoc(History) 
// https://www.instagram.com/wtf_past_3456/
// https://www.instagram.com/_mintydove
// http:/ PR786@qL#9pZxmyYs#11l rat ka safer
             
// horifyyyaura__ Y5u@myoA9PInLEx
// faheem QhorifyyyauraY5u@myoA9PInLExd
// wajeeha_4793
// https://www.instagram.com/nott_.your_type
// https://ig.me/j/AbYQjJbYByrLKwZD/
// https://www.instagram.com/black_b33ry1
// https://www.instagram.com/mewaoo72
// https://www.instagram.com/_.4deen

//arsi zxzx.stfiee number +923120535599   KL6UW$mig2E!8np
// HelloBrother90@90 its._.zain12