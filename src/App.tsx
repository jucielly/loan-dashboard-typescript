import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import LoanProvider from './providers/LoanProvider';
import LoanDashboard from './components/pages/LoanDashboard';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <LoanProvider>
        <LoanDashboard />
      </LoanProvider>
    </Theme>
  );
}

export default App;
