import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${props => props.theme.colors.background};
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h3 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.lightText};

  svg {
    margin-right: 1rem;
    color: ${props => props.theme.colors.primary};
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: ${props => props.theme.colors.text};
    font-weight: 500;
  }

  input,
  textarea {
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <ContactSection id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title>Get In Touch</Title>
          <ContactGrid>
            <ContactInfo>
              <h3>Contact Information</h3>
              <ContactItem>
                <FaEnvelope />
                <span>harshaka512@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <FaPhone />
                <span>+94 76 123 4567</span>
              </ContactItem>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>Colombo, Sri Lanka</span>
              </ContactItem>
            </ContactInfo>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </FormGroup>
              <FormGroup>
                <label htmlFor="message">Message</label>
                <textarea id="message" required></textarea>
              </FormGroup>
              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </SubmitButton>
            </ContactForm>
          </ContactGrid>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact; 