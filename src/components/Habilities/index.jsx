import React, { useState } from 'react';
import useMeasure from '../../hooks/useMeasure';

import { Container } from './styles';
import { useSpring, animated } from 'react-spring';

const Habilities = () => {
  // const [open, toggle] = useState(false);
  // const [bind, { width }] = useMeasure();
  // const props = useSpring({ width: open ? width: 0 });
  return (
    <>
      <Container>

        {/* <div {...bind} className="main" onClick={() => toggle(!open)}>
          <animated.div className="fill" style={props} />
          <animated.div className="content">{props.width.interpolate(x => x.toFixed(0))}</animated.div>
        </div> */}

        <h3>SKILLS</h3>
        <ul>
          <strong >React</strong>
          <li>
            <div>
              <div id="React"></div>
            </div>
          </li>

          <strong>React Native</strong>
          <li>
            <div>
              <div id="ReactNative" ></div>
            </div>
          </li>

          <strong>NodeJS</strong>
          <li>
            <div>
                <div id="NodeJS" ></div>
            </div>
          </li>

          <strong>HTML</strong>
          <li>
            <div>
              <div id="HTML" ></div>
            </div>
          </li>

          <strong>CSS</strong>
          <li>
            <div>
              <div id="CSS" ></div>
            </div>
          </li>
        </ul>
      </Container>
    </>
  );
}

export default Habilities;
