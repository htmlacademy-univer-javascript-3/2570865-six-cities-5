import {MainScreen} from '../../pages/main-screen/main-screen.tsx';

type AppScreenProps = {
  offersAmount: number;
}

export function App({offersAmount}: AppScreenProps) {
  return (
    <MainScreen offersAmount={offersAmount}/>
  );
}
