import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Achievements from './pages/Achievements';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects'; 


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/publications" element={<MainLayout><Publications /></MainLayout>} />
        <Route path="/achievements" element={<MainLayout><Achievements /></MainLayout>} />
        <Route path="/education" element={<MainLayout><Education /></MainLayout>} />
        <Route path="/skills" element={<MainLayout><Skills /></MainLayout>} />
        <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />


      </Routes>
    </Router>
  );
}
