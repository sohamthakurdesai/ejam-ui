import React, { useEffect, useState } from "react";
import DeploymentDetails from './DeploymentDetails';
import { useSelector, useDispatch } from 'react-redux';
import { resetTimerStatus } from '../actions/applicationActions';

const getRandomMillisecondsWithinMinute = () => {
    return Math.floor(Math.random() * 30000);
}
let endTimeInMilliseconds = new Date().getTime() + getRandomMillisecondsWithinMinute()

const CountdownTimer = () => {

    let { isTimerRunning } = useSelector(state => state.applicationReducer);
    const dispatch = useDispatch()

    const calculateTimeLeft = () => {
        let currentTime = new Date()

        const difference = endTimeInMilliseconds - currentTime;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
                milliseconds: Math.floor((difference))
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    let localIsTimerRunning = isTimerRunning

    if(localIsTimerRunning) {
        dispatch(resetTimerStatus())
    }

    return (
        <div>
            {
                localIsTimerRunning && timerComponents.length ? <span>Loading the latest deployment(s) list in {timerComponents} </span> : <DeploymentDetails/>
            }   
        </div>
    );
}

export default CountdownTimer