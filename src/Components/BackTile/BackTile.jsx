import React from 'react';
import styles from "./BackTile.module.css";
// Landing Pages
import Registration from '../Registration/Registration';
import LogIn from '../LogIn/LogIn';
//Main App
import InputBoxPort from "../MainToDo/InputBoxPort/InputBoxPort";
import PendingBoxPort from "../MainToDo/PendingBoxPort/PendingBoxPort";
import CompleteBoxPort from '../MainToDo/CompleteBoxPort/CompleteBoxPort';


function BackTile() {
  return (
    <div className={styles.dimenstion}>
    {/* <Registration/> */}
    {/* <LogIn/> */}
    <InputBoxPort/>
    <PendingBoxPort/>
    <CompleteBoxPort/>
    </div>
  )
}

export default BackTile
