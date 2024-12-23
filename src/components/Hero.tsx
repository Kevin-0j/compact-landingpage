import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const headingText = "Africa's AI-enabled financial OS for SMEs";
  const descriptionText =
    "Empowering merchants with inventory management, connecting them to consumers, and providing smart financing solutions backed by AI.";

  return (
    <div className="pt-20 bg-gradient-to-br from-primary/5 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-1500 ease-out">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-snug overflow-hidden">
              <div
                className="animate-slide-down opacity-0"
                style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
              >
                {headingText.split(' ').map((word, index) => (
                  <span
                    key={index}
                    className="inline-block animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms`, marginRight: '0.25em' }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </h1>
            <p className="mt-8 text-lg text-gray-600 leading-relaxed overflow-hidden">
              <span
                className="animate-slide-up opacity-0"
                style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}
              >
                {descriptionText.split(' ').map((word, index) => (
                  <span
                    key={index}
                    className="inline-block animate-fade-in"
                    style={{ animationDelay: `${1200 + index * 80}ms`, marginRight: '0.25em' }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </p>
          </div>
          <div
            className={`relative transition-all duration-1500 ease-out delay-500
                       ${
                         isVisible
                           ? 'opacity-100 translate-x-0'
                           : 'opacity-0 translate-x-8'
                       }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1664575599736-c5197c684128?auto=format&fit=crop&w=800&q=80"
                  alt="African Merchant using mobile app"
                  className="rounded-2xl shadow-2xl transform transition-all duration-500
                           group-hover:scale-[1.02] group-hover:shadow-3xl
                           w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-4 -left-4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
  @keyframes bounceX {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(4px); }
  }

  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes slideDown {
    from { transform: translateY(-30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes fadeInUp {
    from { 
      transform: translateY(15px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .animate-bounce-x {
    animation: bounceX 1.5s infinite;
  }

  .animate-slide-up {
    animation: slideUp 1s ease-out;
  }

  .animate-slide-down {
    animation: slideDown 1s ease-out;
  }

  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
  }

  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
  }

  .shadow-3xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

const styleTag = document.createElement('style');
styleTag.textContent = styles;
document.head.appendChild(styleTag);
