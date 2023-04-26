import Link from "next/link";
import React from "react";
import style from "./button.module.css";

const Button = (props) => {
  return (
    <Link href={props.link} className={style.btn}>
     {props.children}
    </Link>
  );
};

export default Button;
