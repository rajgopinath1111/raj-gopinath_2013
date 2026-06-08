<script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.263.0/dist/umd/lucide.min.js"></script>
  <script src="/_sdk/element_sdk.js"></script>
   <script src="/_sdk/data_sdk.js" type="text/javascript"></script>

<script>
    // Theme switching
    function changeTheme(theme) {
      const body = document.getElementById('app-body');
      body.className = 'h-full overflow-auto theme-' + theme;
      generateParticles(theme);
    }

    // Particles
    const themeColors = {
      dark: ['#8b5cf6','#06b6d4'],
      sql: ['#a855f7','#7c3aed'],
      powerbi: ['#22c55e','#10b981'],
      python: ['#eab308','#f59e0b'],
      web: ['#06b6d4','#0ea5e9'],
      office: ['#ef4444','#f97316']
    };

    function generateParticles(theme) {
      const container = document.getElementById('particles');
      container.innerHTML = '';
      const colors = themeColors[theme] || themeColors.dark;
      for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 80 + 20;
        p.style.cssText = `width:${size}px;height:${size}px;background:${colors[i%2]};left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*4}s;animation-duration:${4+Math.random()*4}s;`;
        container.appendChild(p);
      }
    }
    generateParticles('dark');

    // Element SDK
    const defaultConfig = {
      hero_title: 'P. Raj Gopinath',
      hero_subtitle: 'Future Data Scientist 🚀',
      background_color: '#0f0f1a',
      text_color: '#e8e8f0',
      accent_color: '#8b5cf6',
      surface_color: '#1e1b4b',
      font_family: 'Outfit',
      font_size: 16
    };

    async function onConfigChange(config) {
      const title = document.getElementById('hero-title');
      const subtitle = document.getElementById('hero-subtitle');
      title.textContent = config.hero_title || defaultConfig.hero_title;
      subtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
      const font = config.font_family || defaultConfig.font_family;
      document.body.style.fontFamily = `${font}, Outfit, sans-serif`;
      const size = config.font_size || defaultConfig.font_size;
      document.body.style.fontSize = size + 'px';
      title.style.fontSize = (size * 3.5) + 'px';
      subtitle.style.fontSize = (size * 1.4) + 'px';
    }

    window.elementSdk.init({
      defaultConfig,
      onConfigChange,
      mapToCapabilities: (config) => ({
        recolorables: [
          { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({background_color:v}); }},
          { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({text_color:v}); }},
          { get: () => config.accent_color || defaultConfig.accent_color, set: (v) => { config.accent_color = v; window.elementSdk.setConfig({accent_color:v}); }}
        ],
        borderables: [],
        fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({font_family:v}); }},
        fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({font_size:v}); }}
      }),
      mapToEditPanelValues: (config) => new Map([
        ['hero_title', config.hero_title || defaultConfig.hero_title],
        ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle]
      ])
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
      });
    });

    lucide.createIcons();
  </script>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9f7c995705f57f2b',t:'MTc3ODExODg5MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script>