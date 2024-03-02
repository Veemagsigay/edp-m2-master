import React from 'react'
import styles from '../styles/Sidebar.module.css';
import { Icon } from 'boxicons';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <box-icon name='code-alt' color='#99b985' align-self= 'center' size='100px'class="centered" ></box-icon>
      <h1>UNICODE</h1>
        <ul>
          <li><p>Employee List</p></li>
          <li><p>Create Employee</p></li>
        </ul>
    </div>
  )
}

export default Sidebar