import React, { useState } from 'react';
import SlidePresentation from './components/SlidePresentation';
import MVPPrototype from './components/MVPPrototype';

export default function App() {
  const [currentView, setCurrentView] = useState<'slides' | 'prototype'>('slides');

  const showPrototype = () => {
    setCurrentView('prototype');
  };

  const showSlides = () => {
    setCurrentView('slides');
  };

  return (
    <div className="w-full h-screen">
      {currentView === 'slides' && (
        <SlidePresentation onShowPrototype={showPrototype} />
      )}
      {currentView === 'prototype' && (
        <MVPPrototype onBack={showSlides} />
      )}
    </div>
  );
}