import React, { useCallback } from 'react';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';

import { Container } from './styles';

const Contact: React.FC = () => {

  

  return (
    <Container>
      <h3>CONTACT</h3>
      
      <div>
        <aside>
          <a href="http://github.com/andrecampll" target="blank">
            <FiGithub
              size={50}
            />
            <span>
              Github
            </span>
          </a>
        </aside>
        <aside>
          <a>
            <FiMail size={50} />
            <span>
              andrevictor50@gmail.com
            </span>
          </a>
        </aside>
        <aside>
          <a href="http://linkedin.com/in/andré-victor-745173195/" target="blank">
            <FiLinkedin size={50}  />
            <span>
              Linkedin
            </span>
          </a>
        </aside>
      </div>
    </Container>
  );
}

export default Contact;
