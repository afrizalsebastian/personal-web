import NavBar from '@components/NavBar/NavBar';
import AboutPage from '@pages/AboutPage';
import ExperiencesPage from '@pages/ExperiencesPage';
import HomePage from '@pages/HomePage';
import ProjectsPage from '@pages/ProjectsPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import './styles/styles.css';

export default function App() {
  const location = useLocation();

  return (
    <div
      className='text-primary flex flex-col items-center h-full w-full'
      style={{
        backgroundImage: `url(/img/bg-image.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <header className='w-full'>
        <NavBar activeLocation={location.pathname} />
      </header>
      <main className='flex-1 w-full flex items-center'>
        <div className='px-4 py-4 max-w-5xl xl:px-0 mx-auto'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/experiences' element={<ExperiencesPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
