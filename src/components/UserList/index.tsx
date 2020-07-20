import React from 'react';

import { Container, Role, User, Avatar } from './styles';

export interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>BOT</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname='vinisioux' />

      <Role>Offline - 5</Role>
      <UserRow nickname='dani' isBot />
      <UserRow nickname='flakss' />
      <UserRow nickname='kizoto' />
      <UserRow nickname='player1' />
      <UserRow nickname='player2' />
      <UserRow nickname='player3' />
      <UserRow nickname='player4' />
      <UserRow nickname='player5' />
      <UserRow nickname='player6' />
      <UserRow nickname='player7' />
      <UserRow nickname='player8' />
      <UserRow nickname='player9' isBot />
      <UserRow nickname='player10' />
      <UserRow nickname='player11' />
      <UserRow nickname='player12' />
      <UserRow nickname='player13' />
      <UserRow nickname='player14' />
      <UserRow nickname='player15' />
      <UserRow nickname='player16' />
    </Container>
  );
};

export default UserList;
