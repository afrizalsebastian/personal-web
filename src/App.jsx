import NavBar from '@components/NavBar/NavBar';
import AboutPage from '@pages/AboutPage';
import ExperiencesPage from '@pages/ExperiencesPage';
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import ProjectsPage from '@pages/ProjectsPage';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
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
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
        <div className='fixed text-secondary bottom-2 left-2' style={{ writingMode: 'vertical-rl' }}>
          © 2024 Afrizal Sebastian
        </div>
        <div className='fixed bottom-10 right-10 text-primary flex flex-col gap-8'>
          <Link to='https://www.instagram.com/afrizalsebastian' target='_blank' className='hover:text-highlight'>
            <FaInstagram size={40} />
          </Link>
          <Link to='https://www.linkedin.com/in/afrizalsebastian' target='_blank' className='hover:text-highlight'>
            <FaLinkedin size={40} />
          </Link>
          <Link to='https://www.github.com/afrizalsebastian' target='_blank' className='hover:text-highlight'>
            <FaGithub size={40} />
          </Link>
        </div>
      </main>
    </div>
  );
}
