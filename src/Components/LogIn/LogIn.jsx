import React from 'react';
import styles from "./LogIn.module.css";

function LogIn() {
  return (
    <div className={styles.lip}>
            <form action="submit">
        <input type="text" id="userName" placeholder="Enter Your User Name"/>
        <input type="password" id="passwordO" placeholder="Enter Your Password"/>
        <button >Log In</button>
        <button >Create Account</button>
      </form>
    </div>
  )
}

export default LogIn
