'use client';

import { useEffect, useRef } from 'react';

const BACKGROUND_COLORS = ['#011410ff', '#021a16ff'];
const [PI_DOUBLE, PI_HALF, PI_QUARTER] = [Math.PI * 2, Math.PI / 2, Math.PI / 4];
const COLOR_MAX = 255;
const BASE_COLOR = [1, 0.1, 0.2];

const getRGB = () => `rgba(216, 254, 42, 1)`;

class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static getLength(x, y) {
    return Math.sqrt(x * x + y * y);
  }

  static getDistance(pointA, pointB) {
    return Vector.getLength(pointA.x - pointB.x, pointA.y - pointB.y);
  }

  static getDifference(pointA, pointB) {
    return new Vector(pointA.x - pointB.x, pointA.y - pointB.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  add({ x, y }) {
    this.x += x;
    this.y += y;
  }

  multiply(value) {
    this.x *= value;
    this.y *= value;
  }

  angleTo(vector) {
    return Math.atan2(vector.y - this.y, vector.x - this.x);
  }

  distanceTo(vector) {
    return Vector.getDistance(this, vector);
  }
}

class Particle {
  constructor({ position: { x, y }, radius, damping }) {
    this.radius = 1;
    this.mass = 1;
    this.acceleration = new Vector();
    this.velocity = new Vector();
    this.damping = 0;
    this.gravityObjects = [];
    this.position = new Vector(x, y);
    this.radius = radius;
    this.damping = damping;
  }

  get x() {
    return this.position.x;
  }

  get y() {
    return this.position.y;
  }

  applyPhysic() {
    this.gravityObjects.forEach((gravityObject) => {
      const distance = Vector.getDistance(gravityObject, this);
      const angle = this.position.angleTo(gravityObject);
      const force = ((gravityObject.mass + this.mass) / (distance * distance)) || 0;
      const gravity = new Vector(Math.cos(angle) * force, Math.sin(angle) * force);
      this.velocity.add(gravity);
    });

    this.velocity.add(this.acceleration);
    this.velocity.multiply(1 - this.damping);
    this.position.add(this.velocity);
  }
}

class Spring extends Particle {
  constructor({ position, center, radius, stiffness, damping }) {
    super({ position, radius, damping });
    this.stiffness = 1;
    this.center = new Vector(center.x, center.y);
    this.stiffness = stiffness;
  }

  applyPhysic() {
    this.force = Vector.getDifference(this.center, this.position);
    this.force.multiply(this.stiffness);
    this.velocity.add(this.force);
    super.applyPhysic();
  }
}

function getTextTexture(text, fontSize) {
  const canvasEl = document.createElement('canvas');
  canvasEl.width = 1024;
  canvasEl.height = 768;
  const context = canvasEl.getContext('2d');
  context.fillStyle = '#FFFFFF';
  context.textAlign = 'left';
  context.textBaseline = 'top';
  context.font = `bold ${fontSize}px Arial`;
  context.fillText(text, 0, 0);
  const { width } = context.measureText(text);
  return context.getImageData(0, 0, width, fontSize);
}

function getBackgroundColor(context, width, height) {
  const gradient = context.createRadialGradient(
    width / 2,
    height / 2,
    280,
    width / 2,
    height / 2,
    520
  );
  BACKGROUND_COLORS.forEach((color, index) => {
    gradient.addColorStop(index, color);
  });
  return gradient;
}

export default function ParticleAnimation() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const repulsorRef = useRef(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const context = canvasEl.getContext('2d');
    let { width, height } = canvasEl;

    // Helper function to get responsive settings
    const getResponsiveSettings = (currentWidth) => {
      const isMobile = currentWidth <= 768;
      const isTablet = currentWidth > 768 && currentWidth <= 1024;
      
      return {
        isMobile,
        isTablet,
        blockSize: isMobile ? 6 : isTablet ? 5 : 4,
        maxSize: isMobile ? 2.5 : 3,
        maxOffsetX: isMobile ? 30 : 40,
        maxOffsetY: isMobile ? 8 : 10,
        fontSize: isMobile ? 70 : isTablet ? 100 : 120,
        repulsorMass: isMobile ? -400 : -600,
      };
    };

    const resize = () => {
      const { innerHeight, innerWidth } = window;
      canvasEl.width = innerWidth;
      canvasEl.height = innerHeight;
      width = innerWidth;
      height = innerHeight;
      
      // Recreate particles on resize for responsiveness
      initParticles();
    };

    const initParticles = () => {
      // Get responsive settings
      const responsiveSettings = getResponsiveSettings(width);
      const { blockSize: BLOCK_SIZE, maxSize: MAX_SIZE, maxOffsetX: MAX_OFFSET_X, maxOffsetY: MAX_OFFSET_Y, fontSize } = responsiveSettings;
      
      const MAX_DISTANCE = 200;
      const BYTE_OFFSET = 4;

      const texture = getTextTexture('DIGIWAVE', fontSize);
      const center = {
        x: width / 2,
        y: height / 2,
      };

      const radius = texture.width / 2;
      const particles = [];

      const repulsor = new Particle({
        position: { x: center.x - 50, y: center.y - 10 },
        radius: 0,
        damping: 0,
      });
      // Responsive repulsion - less on mobile for better performance
      repulsor.mass = responsiveSettings.repulsorMass;
      repulsorRef.current = repulsor;

      for (let i = 0; i < texture.width / BLOCK_SIZE; i++) {
        for (let j = 0; j < texture.height / BLOCK_SIZE; j++) {
          const offset =
            Math.floor(
              j * BLOCK_SIZE * texture.width + i * BLOCK_SIZE + BLOCK_SIZE / 2
            ) * BYTE_OFFSET;

          if (texture.data[offset]) {
            const radius = MAX_SIZE / 2 + (Math.random() * MAX_SIZE) / 2;
            // Always active - dynamic stiffness
            const stiffness = 0.002 + Math.random() * 0.05;
            const damping = 0.01 + Math.random() * 0.1;
            const angle = Math.random() * PI_DOUBLE;
            const distance = Math.random() * MAX_DISTANCE;

            const center = {
              x: i * BLOCK_SIZE + (width - texture.width) / 2,
              y: j * BLOCK_SIZE + (height - texture.height) / 2,
            };

            const position = {
              x: center.x + (Math.random() - Math.random()) * MAX_OFFSET_X,
              y: center.y + (Math.random() - Math.random()) * MAX_OFFSET_Y,
            };

            const particle = new Spring({
              position,
              radius,
              center,
              stiffness,
              damping,
            });

            particle.gravityObjects.push(repulsor);
            particles.push(particle);
          }
        }
      }

      particlesRef.current = particles;
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = ({ clientX, clientY }) => {
      if (repulsorRef.current) {
        repulsorRef.current.position.x = clientX;
        repulsorRef.current.position.y = clientY;
      }
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (touch && repulsorRef.current) {
        const rect = canvasEl.getBoundingClientRect();
        repulsorRef.current.position.x = touch.clientX - rect.left;
        repulsorRef.current.position.y = touch.clientY - rect.top;
      }
    };

    canvasEl.addEventListener('mousemove', handleMouseMove);
    canvasEl.addEventListener('touchmove', handleTouchMove, { passive: false });

    const step = () => {
      const { width, height } = canvasEl;
      const particles = particlesRef.current;

      // Clear canvas with transparent background
      context.clearRect(0, 0, width, height);

      context.save();

      particles.forEach((particle) => {
        particle.applyPhysic();

        context.save();

        context.translate(particle.x, particle.y);

        const colorScale = particle.radius / 3; // Use fixed MAX_SIZE for consistent color scaling
        context.fillStyle = getRGB([
          BASE_COLOR[0] * colorScale,
          BASE_COLOR[1],
          BASE_COLOR[2],
        ]);

        context.beginPath();
        context.arc(0, 0, particle.radius, 0, PI_DOUBLE);
        context.fill();

        context.restore();
      });

      context.restore();

      animationFrameRef.current = requestAnimationFrame(step);
    };

    step();

    return () => {
      window.removeEventListener('resize', resize);
      canvasEl.removeEventListener('mousemove', handleMouseMove);
      canvasEl.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="particle-animation-wrapper">
      <canvas
        ref={canvasRef}
        id="particle-canvas"
        className="particle-canvas"
      />
      <div className="particle-mask"></div>
    </div>
  );
}