const toggleBtn = document.getElementById("toggleBtn");
const moreText = document.getElementById("moreText");
const aboutSection = document.querySelector(".about-section");

// Show more / less
toggleBtn.addEventListener("click", () => {
  moreText.classList.toggle("show");
  toggleBtn.textContent = moreText.classList.contains("show")
    ? "Show Less"
    : "Show More";
});

// 3D Tilt + Glow
aboutSection.addEventListener("mousemove", (e) => {
  const rect = aboutSection.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * 10;

  aboutSection.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

  // Dynamic glow
  const shadowX = (x - centerX) / 5;
  const shadowY = (y - centerY) / 5;

  aboutSection.style.boxShadow = `
    ${-shadowX}px ${-shadowY}px 30px rgba(178, 143, 255, 0.3),
    0 15px 25px rgba(0,0,0,0.5)
  `;
});

// Reset
aboutSection.addEventListener("mouseleave", () => {
  aboutSection.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  aboutSection.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.5)";
});
tsParticles.load("tsparticles", {
    background: {
      color: {
        value: "#121212"
      }
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#b28fff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 3
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        outModes: {
          default: "bounce"
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100
        }
      }
    },
    detectRetina: true
  });
  