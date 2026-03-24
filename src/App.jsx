import { useState } from 'react';
import './styles/global.css';

import Nav        from './components/Nav';
import Background from './components/Background';

import HomePage    from './components/pages/HomePage';
import AboutPage   from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import ClientsPage from './components/pages/ClientsPage';
import CareersPage from './components/pages/CareersPage';
import ContactPage from './components/pages/ContactPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import TermsConditionsPage from './components/pages/TermsConditionsPage';

const PAGES = {
  home:     HomePage,
  about:    AboutPage,
  services: ServicesPage,
  clients:  ClientsPage,
  careers:  CareersPage,
  contact:  ContactPage,
  privacy:  PrivacyPolicyPage,
  terms:    TermsConditionsPage,
};

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PageComponent = PAGES[page] || HomePage;

  return (
    <>
      <Background />
      <Nav page={page} setPage={navigate} />
      <div style={{ paddingTop: 72 }}>
        <PageComponent setPage={navigate} />
      </div>
    </>
  );
}
