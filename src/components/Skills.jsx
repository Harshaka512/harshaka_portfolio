import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  h3 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;

const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 4px;
  overflow: hidden;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
`;

const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "TypeScript", level: 80 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 75 },
    { name: "MongoDB", level: 70 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "CI/CD", level: 80 }
  ]
};

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title>Skills & Expertise</Title>
          <SkillsGrid>
            {Object.entries(skills).map(([category, items]) => (
              <SkillCategory key={category}>
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                {items.map((skill, index) => (
                  <SkillItem key={index}>
                    <h4>{skill.name}</h4>
                    <SkillBar>
                      <SkillProgress
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </SkillBar>
                  </SkillItem>
                ))}
              </SkillCategory>
            ))}
          </SkillsGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 