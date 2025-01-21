import { QueryClientProvider } from './providers/QueryClientProvider';
import { Router } from './router';
import { MobileLayout } from './ui/layout/mobile-layout';
import './reset.css';

function App() {
  return (
    <MobileLayout>
      <QueryClientProvider>
        <Router />
      </QueryClientProvider>
    </MobileLayout>
  );
}

export default App;
