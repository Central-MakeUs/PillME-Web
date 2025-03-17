import { setDefaultOptions } from 'date-fns';
import { ko } from 'date-fns/locale';
// import { ClarityEffector } from './components/ClarityEffector';
import { QueryClientProvider } from './providers/QueryClientProvider';
import { Router } from './router';
import { MobileLayout } from './ui/layout/mobile-layout';
import { CustomToastProvider } from './ui/toast/toast';
import './reset.css';

setDefaultOptions({ locale: ko });

function App() {
  return (
    <MobileLayout>
      <QueryClientProvider>
        <CustomToastProvider />
        <Router />
      </QueryClientProvider>
      {/* <ClarityEffector /> */}
    </MobileLayout>
  );
}

export default App;
