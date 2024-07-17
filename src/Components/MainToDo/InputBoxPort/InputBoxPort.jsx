import React from 'react';
import styles from "./InputBoxPort.module.css";

function InputBoxPort() {
  return (
    <div className={styles.ibp}>
    <form action="submit">
      <input type="text"  id="taskinputs" placeholder="Enter your task"/>
      <button>Submit Tasks</button>
    </form>
      
    </div>
  )
}

export default InputBoxPort
