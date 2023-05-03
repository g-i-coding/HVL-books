import { Card } from '@mui/material';
import { Title } from './Title';
import { Body } from './Body';
import { Footer } from './Footer';
import { Description } from './Description';

const Book = ({ children, ...props }) => {
  return (
    <Card sx={{ maxWidth: '80vw', minWidth: '80vw' }} {...props}>
      {children}
    </Card>
  );
};

Book.Title = Title;
Book.Body = Body;
Book.Footer = Footer;
Book.Description = Description;

export { Book };
export default Book;
