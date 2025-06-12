import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Content = styled.div`
  h2 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.text};
    margin-bottom: 1.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightText};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>About Me</h2>
            <p>
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              I specialize in React, Node.js, and other cutting-edge technologies to create seamless
              user experiences and robust backend solutions.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I strive to create
              efficient, scalable, and maintainable applications. I'm constantly learning and exploring
              new technologies to stay at the forefront of web development.
            </p>
          </motion.div>
        </Content>
        <ImageContainer
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ImageContainer>
      </Container>
    </AboutSection>
  );
};

export default About; 