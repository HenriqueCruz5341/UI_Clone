import React from "react";
import { Container, Role, User, Avatar } from "./styles";

export interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>
        <span>Disponível - 1</span>
        <UserRow nickname="EduardoSenpai" />
      </Role>

      <Role className="offline">
        <span>Offline - 18</span>
        <UserRow nickname="GabriellyBC" isBot />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
      </Role>
    </Container>
  );
};

export default UserList;
