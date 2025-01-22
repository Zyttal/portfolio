import { Project } from "@/interfaces/project";

export const projects: Project[] = [
    {
      id: 1,
      title: "SULAT",
      description: 'A multi-user system featuring student, SPED practitioner, and institution roles with role-based access control. Implemented on-device handwriting assessment using Euclidean Distance for real-time accuracy feedback. Integrated Computer Vision for practitioners to create custom "Connect the Dots" exercises. Features include student progress monitoring and Arduino-based haptic feedback through BLE communication.',
      technologies: ["React", "TypeScript", "Tailwind CSS", "Flutter", "Firebase", "Arduino", "BLE"],
      image: "https://res.cloudinary.com/dbwwffypj/image/upload/v1737460048/Portfolio/Projects/SULAT_dn1ob4.png",
      link: "https://sulat-web-app.vercel.app/"
    },
    {
      id: 2,
      title: "Jotter Mapper",
      description: "A location-based journaling application built with Flutter and integrated with Google Maps API for geographical memory documentation. Implemented Firebase Authentication for user management and Cloud Firestore for real-time journal storage. Features include offline persistence, geolocation-based entry creation, and Firebase Storage integration for media uploads. Developed with cross-platform compatibility supporting both iOS and Android devices.",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Dart"],
      image: "https://res.cloudinary.com/dbwwffypj/image/upload/v1737460047/Portfolio/Projects/Jotter_Mapper_saynu3.png",
      github: "https://github.com/Zyttal/Jotter-Mapper"
    },
    {
      id: 3,
      title: "Snake Game in C",
      description: "A multiplayer Snake game developed in C utilizing SDL2 library for enhanced graphics and seamless gameplay. Features include real-time multiplayer support for up to 4 players, custom networking implementation for multiplayer functionality, and SDL2-powered graphics rendering. Only on Linux Systems, with client-server architecture for multiplayer support. Includes features like collision detection, real-time player movement synchronization, and custom game state management.",
      technologies: ["C", "SDL2", "Networking", "Linux"],
      image: "https://res.cloudinary.com/dbwwffypj/image/upload/v1737461053/Portfolio/Projects/Snake_Game_t4blar.png",
      github: "https://github.com/Zyttal/Snake-Game"
    }
  ];