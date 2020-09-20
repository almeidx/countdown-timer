import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { BigText, Container, Countdown, CountdownContainer, DateInput } from './styles';

interface Time {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Layout: React.FC = () => {
  const [date, setDate] = useState(`${new Date().getFullYear() + 1}-01-01T00:00`);
  const [time, setTime] = useState<Time>({ days: '0', hours: '0', minutes: '0', seconds: '0' });

  const getDate = (str: string): Date | void => {
    const matched = str.match(/(\d+)-(\d+)-(\d+)T(\d+):(\d+)/i);
    if (matched) {
      const [, year, month, day, hour, minute] = matched;
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return new Date(`${day} ${months[Number(month) - 1]} ${year} ${hour}:${minute}`);
    }
  }

  useEffect(() => {
    setInterval(() => {
      const wantedDate = getDate(date);

      if (wantedDate) {
        const totalSeconds = (wantedDate.getTime() - Date.now()) / 1000;

        setTime({
          days: String(Math.floor(totalSeconds / 3600 / 24)).padStart(2, '0'),
          hours: String(Math.floor(totalSeconds / 3600) % 24).padStart(2, '0'),
          minutes: String(Math.floor(totalSeconds / 60) % 60).padStart(2, '0'),
          seconds: String(Math.floor(totalSeconds) % 60).padStart(2, '0'),
        });
      }
    }, 1000);
  });

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }, []);

  return (
    <Container>
      <CountdownContainer>
        <Countdown>
          <BigText>{time.days}</BigText>
          <span>days</span>
        </Countdown>
        <Countdown>
          <BigText>{time.hours}</BigText>
          <span>hours</span>
        </Countdown>
        <Countdown>
          <BigText>{time.minutes}</BigText>
          <span>minutes</span>
        </Countdown>
        <Countdown>
          <BigText>{time.seconds}</BigText>
          <span>seconds</span>
        </Countdown>
      </CountdownContainer>

      <DateInput type='datetime-local' defaultValue={date} onChange={handleInputChange} />
    </Container>
  );
};

export default Layout;
