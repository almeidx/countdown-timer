import React, { useState } from 'react';

import { BigText, Container, Countdown, CountdownContainer } from './styles';

const Layout: React.FC = () => {
  const [days, setDays] = useState<number | string>(0);
  const [hours, setHours] = useState<number | string>(0);
  const [minutes, setMinutes] = useState<number | string>(0);
  const [seconds, setSeconds] = useState<number | string>(0);

  function formatTime(time: number): string | number {
    return time < 10 ? `0${time}` : time;
  }

  setInterval(() => {
    const currentDate = new Date();
    const newYearsDate = new Date(`1 Jan ${currentDate.getFullYear() + 1}`);

    const totalSeconds = (newYearsDate.getTime() - currentDate.getTime()) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    setDays(formatTime(days));
    setHours(formatTime(hours));
    setMinutes(formatTime(minutes));
    setSeconds(formatTime(seconds));
  }, 1000);

  return (
    <Container>
      <h1>New Years Eve</h1>

      <CountdownContainer>
        <Countdown>
          <BigText>{days}</BigText>
          <span>days</span>
        </Countdown>
        <Countdown>
          <BigText>{hours}</BigText>
          <span>hours</span>
        </Countdown>
        <Countdown>
          <BigText>{minutes}</BigText>
          <span>minutes</span>
        </Countdown>
        <Countdown>
          <BigText>{seconds}</BigText>
          <span>seconds</span>
        </Countdown>
      </CountdownContainer>
    </Container>
  );
};

export default Layout;
