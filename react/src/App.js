import styled from "styled-components";
import InCall from "./components/InCall";
import PreJoinRoom from "./components/PreJoinRoom";
import theme from "./theme";
import logo from "./icons/logo.svg";
import { CallProvider, INCALL, PREJOIN, useCallState } from "./CallProvider";

export const MOD = "MOD";
export const SPEAKER = "SPK";
export const LISTENER = "LST";

const AppContent = () => {
  const { view } = useCallState();
  return (
    <AppContainer>
      <Wrapper>
        <Header>
          <HeaderTop>
            <Title>Party line</Title>
            <Logo src={logo} className="App-logo" alt="logo" />
          </HeaderTop>
        </Header>
        {view === PREJOIN && <PreJoinRoom />}
        {view === INCALL && <InCall />}
      </Wrapper>
    </AppContainer>
  );
};

function App() {
  return (
    <CallProvider>
      <AppContent />
    </CallProvider>
  );
}

const AppContainer = styled.div`
  background-color: ${theme.colors.greyLightest};
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  max-width: 700px;
  padding: 32px 24px 0;
  min-height: 100%;
  margin: 0 auto;
`;
const Logo = styled.img`
  height: 24px;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
`;
const HeaderTop = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: ${theme.fontSize.xxlarge};
  color: ${theme.colors.blueDark};
  margin: 4px 0;
  font-weight: 600;
`;

export default App;
