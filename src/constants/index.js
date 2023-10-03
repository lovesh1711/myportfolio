import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    blender,
    arduino,
    cpp,
    fusion,
    github_skill,
    c,
    python,
    latex,
    premier_pro,
    mission_planner,
    opencv,
    docker,
    meta,
    matlab,
    starbucks,
    tesla,
    shopify,
    lovesh,
    pendulum,
    copter,
    wayfinder,
    EKF,
    jobit,
    tripguide,
    threejs,
    stylus,
    cable,
    github,
    IvLabs,
    tum,
    vecros,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    
    {
      name: "git",
      icon: git,
    },
    
    {
      name: "python",
      icon: python,
    },
    {
      name: "premier_pro",
      icon: premier_pro,
    },
    {
      name: "matlab",
      icon: matlab,
    },
    {
      name: "github",
      icon: github_skill,
    },
    {
      name: "mission_planner",
      icon: mission_planner,
    },
    {
      name: "opencv",
      icon: opencv,
    },
    {
      name: "latex",
      icon: latex,
    },
    {
      name: "c",
      icon: c,
    },

    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "blender",
      icon: blender,
    },
    {
      name: "fusion",
      icon: fusion,
    },
    {
      name: "arduino",
      icon: arduino,
    },

    
    
  ];
  
  const experiences = [
    {
      title: "Research Intern",
      company_name: "Technical University of Munich",
      icon: tum,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        " Aimed to investigate underwater propulsion approaches for novel unconventional aerial-aquatic robots, intended for environmental sampling tasks. ",
        "Proposed and implemented mechanical design improvements for tilt-rotor tri-copter plane including autopilot configuration."
      ],
    },
    {
      title: "Robotics Software Intern",
      company_name: "VECROS",
      icon: vecros,
      iconBg: "#E6DEDD",
      date: "May 2022 - July 2022",
      points: [
        "Developed a custom mode and a MAVlink message in ArduPilot to trigger the instructions sent to the drone",
        "Programmed a drone in python using dronekit and simulated in Mission Planner SITL.",
        "Achieved successful control of drone in custom mode and drafted a detailed report containing a lucid explanation of all the tasks covered.",
        
      ],
    },
    {
      title: "Summer research Intern",
      company_name: "IvLabs, VNIT",
      icon: IvLabs,
      iconBg: "#383E56",
      date: "July 2021 - Nov 2021",
      points: [
        "Aimed to build a Stylus Controlled Snake Game and to get well versed with the basics of Computer Vision.",
        "Modeled a method to discern the direction of hand movement and built a complete Stylus Controlled Snake game.",
        "Executed a virtual drawing pad by detecting a dynamic color stylus.",
       
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tethered Aerial Vehicle for Blind Navigation",
      description:
        "Aimed to control a tethered aerial vehicle to assist a blind person by approximating the system as a damped spring-mass system and implemented human state aware controller.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },

    
        
        
      ],
      image: cable,
      source_code_link: "https://github.com/IvLabs/tethered-aerial-vehicle",
    },
    {
      name: "Inverted Pendulum",
      description:
        "Aimed to stabilize the inverted pendulum in an upright position by implementing PID and LQR controllers and compared the results from both",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        
      ],
      image: pendulum,
      source_code_link: "https://github.com/lovesh1711/Inverted-Pendulum",
    },
    {
      name: "Robust QuadCopter Control",
      description:
        "Modeled a quadcopter capable of dynamic maneuvers Implemented PD controller in 2D and 3D for various trajectories Achieved Minimum snap trajectory for quadrotor given the desired waypoints",
      tags: [
        {
          name: "MATLAB",
          color: "blue-text-gradient",
        },
      ],
      image: copter,
      source_code_link: "https://github.com/lovesh1711/3D-Controller-and-Trajectory-Generation",
    },

    {
      name: "Stylus Controlled Snake Game",
      description:
        "Aimed to create a fully fledged snake game controlled by a stylus Implemented HSV Backprojection for detecting a dynamically coloured stylus and determining its direction of movement.",
      tags: [
        {
          name: "OpenCV",
          color: "blue-text-gradient",
        },
        {
          name: "Pygame",
          color: "blue-text-gradient",
        },
      ],
      image: stylus,
      source_code_link: "https://github.com/lovesh1711/Stylus_controlled_snake_game",
    },

    {
      name: "WayFinder",
      description:
        "Aimed to address the navigation challenges faced by cyclists and bikers in a safer manner compared to using mobile phones. It does not require any custom application as it uses exisiting voice packs.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        
      ],
      image: wayfinder,
      source_code_link: "https://github.com/lynx1902/ESP32-Wayfinder",
    },


    {
      name: "Trajectory Estimation using EKF",
      description:
        "Implemented an Extended Kalman filter, for estimating the trajectory of a vehicle using odometry.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: EKF,
      source_code_link: "https://github.com/lovesh1711/Trajectory-Estimation-using-EKF",
    },


    
  ];


  

  
  export { services, technologies, experiences, testimonials, projects };