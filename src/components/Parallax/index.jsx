import React, { useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';

import { Container } from './styles';

// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.
const calc = o => `translateY(${o * 0.1}px)`;

const Comp = () => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Container
      ref={ref}
    >
      <animated.div style={{
        background: 'transparent',
        position: 'absolute',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: offset.interpolate(calc)
      }}>
        <h2>HELLO, WORLD.</h2>
        <h1>I'm André Victor</h1>
        <div>
          <h3>
            FRONT-END DEVELOPER | BACK-END DEVELOPER
          </h3>
        </div>
      </animated.div>
    </Container>
  )
}

export default Comp;