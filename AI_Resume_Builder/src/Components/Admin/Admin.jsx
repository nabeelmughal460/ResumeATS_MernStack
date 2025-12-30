import React from 'react'
import styles from './Admin.module.css'
import { Skeleton } from '@mui/material';
import WithAuthHoc from '../../Utils/HOC/WithAuthHoc';


const Admin = () => {
  return (
<div className={styles.Admin}>
  <div className={styles.AdminBlock}>
            <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={260} height={400} />   

    <div className={styles.AdminCard}>
      <h2>Coder</h2>
      <p style={{color:'blue'}}>xyz@gmail.com</p>
      <h3>Score  :50%</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam debitis iste magni, iure ullam consectetur enim sapiente earum hic corporis pariatur expedita quam. Ipsum veniam tempore, molestias consequuntur tempora rem.</p>
    </div>
      <div className={styles.AdminCard}>
      <h2>Coder</h2>
      <p style={{color:'blue'}}>xyz@gmail.com</p>
      <h3>Score  :50%</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam debitis iste magni, iure ullam consectetur enim sapiente earum hic corporis pariatur expedita quam. Ipsum veniam tempore, molestias consequuntur tempora rem.</p>
    </div>
      <div className={styles.AdminCard}>
      <h2>Coder</h2>
      <p style={{color:'blue'}}>xyz@gmail.com</p>
      <h3>Score  :50%</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam debitis iste magni, iure ullam consectetur enim sapiente earum hic corporis pariatur expedita quam. Ipsum veniam tempore, molestias consequuntur tempora rem.</p>
    </div>
      <div className={styles.AdminCard}>
      <h2>Coder</h2>
      <p style={{color:'blue'}}>xyz@gmail.com</p>
      <h3>Score  :50%</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam debitis iste magni, iure ullam consectetur enim sapiente earum hic corporis pariatur expedita quam. Ipsum veniam tempore, molestias consequuntur tempora rem.</p>
    </div>
  </div>
</div>
  )
}

export default WithAuthHoc (Admin)
