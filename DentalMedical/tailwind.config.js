/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      generalSans : ['General Sans Variable']
    },
    // colors: {
    //   'regal-blue': '#243c5a',
    //   'mid-blue': '#1376F8'
    // },
    keyframes:{
      ping : {
        '75%, 100%' :{
          transform: 'scale(2)',
          opacity: '0'
        }
      },
      shake: {
        '0%, 100%' : {
          transform: 'translateX(0)'
        },
        '25%' : {
          transform: 'translateX(-5px)'
        },
        '50%' : {
          transform: 'translateX(5px)'
        },
        '75%' : {
          transform: 'translateX(-5px)'
        }
      },
      vibrate: {
        '0%, 100%' : {
          transform: 'translate(0)'
        },
        '10%' : {
          transform: 'translate(-2px, 2px)'
        },
        '20%': {
          transform: 'translate(2px, -2px)'
        },
        '30%':{
          transform: 'translate(-2px, 2px)'
        },
        '40%': {
          transform: 'translate(2px, -2px)'
        },
        '50%': {
          transform: 'translate(-2px, 2px)'
        },
        '60%': {
          transform: 'translate(2px, -2px)'
        },
        '70%': {
          transform: 'translate(-2px, 2px)'
        },
        '80%': {
          transform: 'translate(2px, -2px)'
        },
        '90%': {
          transform: 'translate(-2px, 2px)'
        }
      },
      phoneRing: {
        '0%, 100%': {
          transform: 'translateY(0) rotate(0deg)'
        },
        '25%' : {
          transform: 'translateY(-2px) rotate(-5deg)'
        },
        '50%' : {
          transform: 'translateY(2px) rotate(5deg)'
        },
        '75%' : {
          transform: 'translateY(-2px) rotate(-5deg)'
        }
      },
      floatEffect: {
        '0%, 100%':{
          transform: 'translateY(-10px)'
        },
        '50%':{
          transform: 'translateY(10px)'
        }
      }
    },
    animation:{
      shake : 'shake 0.8s infinite',
      vibrate: 'vibrate 0.8s infinite',
      phoneRing : 'phoneRing 1s infinite',
      ping : 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      floatEffect: 'gradientEffect 5s ease infinite'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
  },
  plugins: [],
};
