import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import styles from './styles.module.scss';

const Rate = (props) => {
    return (
        <div className = {styles.rateContainer}>
           {props.rate}
        </div>
    )
}



export default Rate

