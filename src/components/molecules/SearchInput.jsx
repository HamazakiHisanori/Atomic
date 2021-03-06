import styled from "styled-components";

import { BaseInput } from "../atoms/input/BaseInput";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { memo } from "react";

export const SearchInput = memo(() => {
  console.log("SearchInput");
  return (
    <SContainer>
      <BaseInput placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
