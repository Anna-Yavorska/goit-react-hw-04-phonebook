import { Item, Button, IconWrapper } from './ContactList.styled';
import { IoMdContact } from 'react-icons/io';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <IconWrapper>
              <IoMdContact size="24"/>
            </IconWrapper>
            <p>
              {contact.name}: {contact.number}
            </p>
            <Button onClick={() => onDelete(contact.id)}>Delete</Button>
          </Item>
        );
      })}
    </ul>
  );
};
