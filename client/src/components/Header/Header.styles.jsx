import styled from "styled-components";
import { Link } from "wouter";

export const HeaderContainer = styled.nav`
  height: 4.375rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5625rem;
`;

export const LogoContainer = styled.a`
  margin: auto 0px;
  margin-left: 1.5rem;
  width: 4rem;
  height: 100%;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 0.625rem 1rem;
  cursor: pointer;
`;
