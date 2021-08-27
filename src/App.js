import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}
