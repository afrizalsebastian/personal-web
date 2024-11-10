import NavBar from '@components/NavBar/NavBar';
import AboutPage from '@pages/AboutPage';
import ExperiencesPage from '@pages/ExperiencesPage';
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import PortfolioPage from '@pages/PortfolioPage';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './styles/styles.css';

export default function App() {
  const location = useLocation();

  return (
    <div
      className='text-primary flex flex-col items-center h-full w-full overflow-hidden'
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
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
        <div className='fixed text-primary bottom-4 left-2' style={{ writingMode: 'vertical-rl' }}>
          © 2024 Afrizal Sebastian
        </div>
        <div className='fixed bottom-4 md:bottom-8 right-4 md:right-10 text-primary flex flex-col gap-4 md:gap-8'>
          <Link to='https://www.instagram.com/afrizalsebastian' target='_blank' className='hover:text-highlight'>
            <FaInstagram className='size-[30px] md:size-[40px] 2xl:size-[50px]' />
          </Link>
          <Link to='https://www.linkedin.com/in/afrizalsebastian' target='_blank' className='hover:text-highlight'>
            <FaLinkedin className='size-[30px] md:size-[40px] 2xl:size-[50px]' />
          </Link>
          <Link to='https://www.github.com/afrizalsebastian' target='_blank' className='hover:text-highlight'>
            <FaGithub className='size-[30px] md:size-[40px] 2xl:size-[50px]' />
          </Link>
        </div>
      </main>
    </div>
  );
}
