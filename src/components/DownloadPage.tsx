import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudArrowDownIcon, CheckCircleIcon, DocumentIcon } from '@heroicons/react/24/outline';

const FloatingParticle: React.FC<{ delay: number }> = ({ delay }) => {
  const randomPosition = () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  const position = randomPosition();
  const targetPosition = randomPosition();

  return (
    <motion.div
      className="particle"
      initial={{ opacity: 0, ...position }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: [position.x, targetPosition.x],
        y: [position.y, targetPosition.y],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

const DownloadPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  // PDF file information
  const pdfInfo = {
    name: 'example.pdf',
    size: '2.5 MB',
    type: 'PDF Document',
    url: '/example.pdf'
  };

  useEffect(() => {
    setTimeout(() => setShowDownload(true), 500);
  }, []);

  const startDownload = () => {
    setShowDownload(false);
    
    // Create a link element
    const link = document.createElement('a');
    link.href = pdfInfo.url;
    link.download = pdfInfo.name;
    
    // Simulate download progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          // Trigger the actual download
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  };

  const openFile = () => {
    window.open(pdfInfo.url, '_blank');
  };

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => (
    <FloatingParticle key={i} delay={i * 0.5} />
  ));

  return (
    <div className="app-container">
      {particles}
      
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="logo"
          >
            PDF Downloader
          </motion.h1>
          <nav className="nav-links">
            <motion.a
              href="/"
              className="nav-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <motion.a
              href="/about"
              className="nav-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
            <motion.a
              href="/contact"
              className="nav-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* File Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <div className="file-info">
              <motion.div
                className="file-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <DocumentIcon />
              </motion.div>
              <div className="file-details">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {pdfInfo.name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Size: {pdfInfo.size} • Type: {pdfInfo.type}
                </motion.p>
              </div>
            </div>
            <div className="status-info">
              <motion.div
                className="status-row"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span>Format:</span>
                <span className="status-success">PDF Document</span>
              </motion.div>
              <motion.div
                className="status-row"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span>Status:</span>
                <span>Ready to download</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <div className="icon-container">
              <motion.div
                className="icon-glow"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <AnimatePresence mode="wait">
                {isComplete ? (
                  <motion.div
                    key="complete"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <CheckCircleIcon className="icon" />
                  </motion.div>
                ) : showDownload ? (
                  <motion.div
                    key="download"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <CloudArrowDownIcon className="icon" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="downloading"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <CloudArrowDownIcon className="icon pulse" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!isComplete && !showDownload && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="progress-container">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="status-row"
                  style={{ justifyContent: 'center' }}
                >
                  {`${progress}% Complete`}
                </motion.p>
              </motion.div>
            )}

            {showDownload && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startDownload}
                className="button button-primary"
                style={{ display: 'block', width: '100%' }}
              >
                Download PDF
              </motion.button>
            )}

            {isComplete && (
              <div style={{ textAlign: 'center' }}>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="status-success"
                  style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}
                >
                  Download Complete!
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button button-success"
                  onClick={openFile}
                >
                  Open PDF
                </motion.button>
              </div>
            )}
          </motion.div>

          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="support-text"
          >
            <p>Having trouble? <motion.a
              href="/support"
              className="support-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >Contact support</motion.a></p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DownloadPage; 