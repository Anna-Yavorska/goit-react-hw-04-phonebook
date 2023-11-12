import { Item, Button, IconWrapper } from './ContactList.styled';
import { IoMdContact } from 'react-icons/io';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Item key={id}>
            <IconWrapper>
              <IoMdContact size="24"/>
            </IconWrapper>
            <p>
              {name}: {number}
            </p>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </Item>
        );
      })}
    </ul>
  );
};
