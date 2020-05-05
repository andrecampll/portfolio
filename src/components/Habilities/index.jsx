import React, { useState } from 'react';
import useMeasure from '../../hooks/useMeasure';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt, FaGitlab, FaDocker, FaPython } from 'react-icons/fa';

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
        <div className="grid-container" >
          <div className="grid-item react" onclick="">
            <FaReact size={55} />
          </div>
          <div className="grid-item reactNative">
            <FaReact size={55} />
          </div>
          <div className="grid-item node">
            <FaNodeJs size={55} />
          </div>
          <div className="grid-item Html5">
            <FaHtml5 size={55} />
          </div>
          <div className="grid-item css">
            <FaCss3 size={55} />
          </div>
          <div className="grid-item Git">
            <FaGitAlt size={55} />
          </div>
          <div className="grid-item Gitlab">
            <FaGitlab size={55} />
          </div>
          <div className="grid-item docker">
            <FaDocker size={55} />
          </div>
          <div className="grid-item Python">
            <FaPython size={55} />
          </div>
        </div>
        {/* <ul> */}
          {/* <strong>React</strong>
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
        </ul> */}
      </Container>
    </>
  );
}

export default Habilities;
