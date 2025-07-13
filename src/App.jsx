import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HeroSection';
import WorkSection from './components/WorkSection';
import SkillsMatrix from './components/SkillsSection';
import ContactSection from './components/Contact';
import AnimatedIntro from './components/Intro';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        
        
        {/* Main Content */}
        <main className="pt-20">
          
          <Routes>
            <Route path="/" element={
              <>
                <AnimatedIntro/>
                <Navbar />
                <HomeSection />
                <WorkSection />
                <SkillsMatrix />
                <ContactSection/>
              </>
            } />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        {/* Toast Container - placed here to appear above all content */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastStyle={{
            backgroundColor: '#1e293b',
            color: '#f8fafc'
          }}
        />
      </div>
    </Router>
  );
}

export default App;