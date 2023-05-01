import Link from "next/link";
import React from "react";
import style from "./button.module.css";

const Button = (props) => {

  if(props.link){
    return (
      <Link href={props.link} className={style.btn}>
       {props.children}
      </Link>
    );
  }

  return <button className={style.btn} onClick={props.onClick}>{props.children}</button>

};

export default Button;
