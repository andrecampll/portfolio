import React, { useState, useCallback } from 'react';
import Habilities from '../../components/Habilities';
import Projects from '../../components/Projects';
import Parallax from '../../components/Parallax';
import Contact from '../../components/Contact';

import useWindowDimensions from '../../hooks/useWindowsDimensions';

import { Container, Content, AboutSection } from './styles';

const Dashboard: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const { height } = useWindowDimensions();

  const handleScroll = useCallback(() => {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled > height/2) {
        setAnimated(true);
      }
    });
  }, [height]);

  handleScroll();

  return (
    <>
      <Container >
        <Parallax />
      </Container>

      <Content>
        <AboutSection animated={animated}>
          <h3>ABOUT</h3>

          <div>
            <aside>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga id iusto totam porro, facilis illum alias beatae perspiciatis, iste veritatis quidem cupiditate repellat! Incidunt numquam itaque exercitationem illum quam!</p>
            </aside>
          </div>
        </AboutSection>

        <Habilities />

        <Projects />

        <Contact />

      </Content>
    </>
  );
}

export default Dashboard;
