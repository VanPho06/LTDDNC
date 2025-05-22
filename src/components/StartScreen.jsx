import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/StartScreen.css';
import heart from'../Data/heart.png'
function StartScreen() {
  const navigate = useNavigate();

  return (
    <div className="start-screen">
      {/* Câu 1a: Animation cho dòng chữ */}
      <motion.h1
        className="welcome-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Welcome to Premium!
      </motion.h1>

      {/* Câu 1b: Animation cho logo */}
      <motion.img
        src={heart} // Thay bằng URL hình ảnh thực tế
        alt="Logo"
        className="logo"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />

      {/* Câu 1b & 1c: Animation cho nút và điều hướng */}
      <motion.button
        className="start-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/detail')}
      >
        Start listening
      </motion.button>
    </div>
  );
}

export default StartScreen;