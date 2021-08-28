import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { HeaderOnly } from "../templates/HeaderOnly";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/tW0Ix_Ajg6Y",
    name: "sample",
    email: "sample@sample.com",
    phone: "000-0000-0000",
    company: {
      name: "sample株式会社"
    },
    website: "https://www.google.co.jp/"
  };
});

export const Users = () => {
  return (
    <HeaderOnly>
      <SContainer>
        <h2>ユーザー一覧</h2>
        <SearchInput />
        <SUserArea>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </SUserArea>
      </SContainer>
    </HeaderOnly>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
