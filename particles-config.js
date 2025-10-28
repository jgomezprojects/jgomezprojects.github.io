/* particles-config.js */

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 60 },
      "color": { "value": "#3b82f6" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3 },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#3b82f6",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" }
      }
    },
    "retina_detect": true
  });
});
