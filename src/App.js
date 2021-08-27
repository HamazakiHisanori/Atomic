import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";
import { SeaechInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/UserCard";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/tW0Ix_Ajg6Y",
  name: "sample",
  email: "sample@sample.com",
  phone: "000-0000-0000",
  company: {
    name: "sample株式会社"
  },
  website: "https://www.google.co.jp/"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SeaechInput />
      <UserCard user={user} />
    </div>
  );
}
