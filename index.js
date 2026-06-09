tailwind.config = {
      theme: {
        extend: {
          colors: {
            f1red: '#E8002D',
            carbon: '#0a0a0a',
            night: '#080808',
            chrome: '#C0C0C0'
          },
          fontFamily: {
            orbitron: ['Orbitron', 'sans-serif'],
            barlow: ['Barlow Condensed', 'sans-serif'],
            dm: ['DM Sans', 'sans-serif']
          },
          boxShadow: {
            redglow: '0 0 38px rgba(232, 0, 45, 0.36)',
            insetline: 'inset 0 1px 0 rgba(255,255,255,0.08)'
          }
        }
      }
    }

const nav = document.getElementById('navbar');
    const updateNav = () => {
      const active = window.scrollY > 24;
      nav.classList.toggle('bg-black/78', active);
      nav.classList.toggle('backdrop-blur-xl', active);
      nav.classList.toggle('border-white/10', active);
      nav.classList.toggle('shadow-2xl', active);
    };
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });