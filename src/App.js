import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import UserProfile from './components/ProfileCard/UserProfile';

function App() {
  return (
    <div className="min-h-screen bg-gray-700">
      <Navbar />
      <MainSection />
      <div className="py-8 px-8 grid gap-6 lg:max-w-[1280px] lg:mx-auto lg:grid-cols-3">
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
