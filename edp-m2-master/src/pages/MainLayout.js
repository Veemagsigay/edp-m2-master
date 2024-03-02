import React from 'react';
import styles from '../styles/MainLayout.module.css';
import Sidebar from '../components/Sidebar';
import CreateEmployee from './CreateEmployee';
import EmployeeList from './EmployeeList';

const MainLayout = () => {
  return (
    <>
        <div className={styles.mainlayout}>
            <div className={styles.sidebarContainer}>
                <Sidebar />
            </div>
            <div className={styles.contentContainer}>
                <CreateEmployee />
                {/* <EmployeeList /> */}
            </div>
        </div>
    </>
  )
}

export default MainLayout