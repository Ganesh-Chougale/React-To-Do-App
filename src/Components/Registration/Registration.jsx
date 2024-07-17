import React from 'react';
import styles from "./Registration.module.css"

function Registration() {
  return (
    <div className={styles.rp}>
      <form action="submit">
        <input type="text" id="userName" placeholder="Enter Your User Name"/>
        <input type="email" id="eMail" placeholder="Enter Your Email"/>
        <input type="password" id="passwordO" placeholder="Enter Your Password"/>
        <input type="text" id="passwordD" placeholder="Repeat Your Password"/>
        <button >Create Account</button>
        <button >Log In</button>
      </form>
    </div>
  )
}

export default Registration;
