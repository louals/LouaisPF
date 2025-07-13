// First, import all images at the top
import ReactPrj from "../assets/ReactPrj.png";
import mlApp from "../assets/mlapppy.png";
import rsb from "../assets/raspberrybg.jpg";
import cbir from "../assets/cbirapplication.png";
import kotlin from "../assets/kotlinbg.png";
import socialmedia from "../assets/socialmedia.png";
import security from "/demo/RaspberryPi4.mp4";
import ReactLive from "/demo/reactcommerce.mp4";
import snapvid from "/demo/socialmedia.mp4";
import mlapp from "/demo/mlapp.mp4";
export const workContent = {
  en: {
    title: "Latest",
    highlightedTitle: "Projects",
    subtitle:
      "Selected projects showcasing my problem-solving approach and technical expertise",
    viewAll: "View All Projects On Github",
    projects: [
      {
        title: "Full-Stack E-Commerce Platform",
        description:
          "Modern online store with real-time inventory, Stripe payments, and Cloudflare edge caching. Handling transactions.",
        tags: [
          "React",
          "Node.js",
          "MongoDB",
          "Stripe",
          "Cloudflare",
          "Tailwind CSS",
        ],
        categories: ["Web", "Full Stack"],
        image: ReactPrj,
        year: "2024",
        links: {
          code: "https://github.com/louals/Ecommerce-React-Node.js",
          demo: ReactLive,
        },
      },
      {
        title: "Machine Learning Application",
        description:
          "Interactive machine learning platform that automatically trains and evaluates multiple models for classification and regression tasks.",
        tags: ["Streamlit", "Python", "Scikit-learn", "Pandas"],
        categories: ["AI/ML"],
        image: mlApp,
        year: "2025",
        featured: true,
        links: {
          code: "https://github.com/louals/mlapp",
          demo: mlapp,
        },
      },
      {
        title: "Smart Home Alarm System",
        description:
          "A physical + software-integrated smart alarm system built using Raspberry Pi, Python (Tkinter & GPIO), and a Flask backend with real-time MySQL logging.",
        tags: [
          "Python",
          "Raspberry Pi",
          "Flask",
          "MySQL",
          "GPIO",
          "Hardware",
          "IoT",
        ],
        categories: ["IoT", "Full Stack"],
        image: rsb,
        year: "2025",
        links: {
          code: "https://github.com/louals/Py_AlarmSystem",
          demo: security,
        },
      },
      {
        title: "Face Recognition & CBIR App",
        description:
          "A Streamlit app supporting facial recognition. Users can log in securely and perform content-based image retrieval using advanced image descriptors.",
        tags: ["Streamlit", "Python", "OpenCv", "Sqlite", "Numpy", "Scipy"],
        categories: ["AI/ML", "Full Stack"],
        image: cbir,
        year: "2025",
        links: {
          code: "https://github.com/yourusername/smart-alarm",
          demo: "https://your-alarm-demo.com",
        },
      },
      {
        title: "Species Tracker App",
        description:
          "A Kotlin app letting users add, view and delete species while Syncing it with Firebase's Realtime Database and storing it in SQLite, Sensor monitoring And notification.",
        tags: ["Kotlin", "Firebase", "AndroidStudio", "XML", "Sqlite"],
        categories: ["Mobile", "Full Stack"],
        image: kotlin,
        year: "2024",
        links: {
          code: "https://github.com/louals/Kotlin_SpecieApp",
          demo: "",
        },
      },
      {
        title: "Social Media App",
        description:
          "A TypeScript React social app using Appwrite with infinite scroll, post creation, likes, saves, and user profiles. Clean, scalable, modern.",
        tags: ["TypeScript", "React", "AppWrite", "Tailwind CSS"],
        categories: ["Web", "Full Stack"],
        image: socialmedia,
        year: "2025",
        links: {
          code: "https://github.com/louals/Kotlin_SpecieApp",
          demo: snapvid,
        },
      },
    ],
    linkLabels: {
      github: "GitHub",
      liveDemo: "Live Demo",
    },
  },
  fr: {
    title: "Derniers",
    highlightedTitle: "Projets",
    subtitle:
      "Une sélection de projets démontrant mon approche en résolution de problèmes et mon expertise technique.",
    viewAll: "Voir tous les projets",
    projects: [
      {
        title: "Plateforme E-Commerce Full-Stack",
        description:
          "Boutique en ligne moderne avec inventaire en temps réel, paiements via Stripe et mise en cache Cloudflare. Gestion complète des transactions.",
        tags: [
          "React",
          "Node.js",
          "MongoDB",
          "Stripe",
          "Cloudflare",
          "Tailwind CSS",
        ],
        categories: ["Web", "Full Stack"],
        image: ReactPrj,
        year: "2024",
        links: {
          code: "https://github.com/louals/Ecommerce-React-Node.js",
          demo: ReactLive,
        },
      },
      {
        title: "Application de Machine Learning",
        description:
          "Plateforme interactive de machine learning qui entraîne et évalue automatiquement plusieurs modèles pour des tâches de classification et de régression.",
        tags: ["Streamlit", "Python", "Scikit-learn", "Pandas"],
        categories: ["AI/ML"],
        image: mlApp,
        year: "2025",
        featured: true,
        links: {
          code: "https://github.com/louals/mlapp",
          demo: mlapp,
        },
      },
      {
        title: "Système d'Alarme Domotique",
        description:
          "Système d’alarme intelligent combinant matériel et logiciel, construit avec un Raspberry Pi, Python (Tkinter & GPIO), et backend Flask avec journalisation MySQL en temps réel.",
        tags: [
          "Python",
          "Raspberry Pi",
          "Flask",
          "MySQL",
          "GPIO",
          "Hardware",
          "IoT",
        ],
        categories: ["IoT", "Full Stack"],
        image: rsb,
        year: "2025",
        links: {
          code: "https://github.com/louals/Py_AlarmSystem",
          demo: security,
        },
      },
      {
        title: "Reconnaissance Faciale et CBIR",
        description:
          "Une application Streamlit permettant la reconnaissance faciale. Connexion sécurisée et recherche d’images par contenu grâce à des descripteurs avancés.",
        tags: ["Streamlit", "Python", "OpenCv", "Sqlite", "Numpy", "Scipy"],
        categories: ["AI/ML", "Full Stack"],
        image: cbir,
        year: "2025",
        links: {
          code: "https://github.com/yourusername/smart-alarm",
          demo: "https://your-alarm-demo.com",
        },
      },
      {
        title: "Application de Suivi des Espèces",
        description:
          "Application Kotlin permettant d’ajouter, consulter et supprimer des espèces, synchronisée avec Firebase Realtime Database et stockage local en SQLite, avec surveillance des capteurs et notifications.",
        tags: ["Kotlin", "Firebase", "AndroidStudio", "XML", "Sqlite"],
        categories: ["Mobile", "Full Stack"],
        image: kotlin,
        year: "2024",
        links: {
          code: "https://github.com/louals/Kotlin_SpecieApp",
          demo: "",
        },
      },
      {
        title: "Application Réseau Social",
        description:
          "Application sociale React TypeScript utilisant Appwrite avec défilement infini, création de publications, likes, sauvegardes et profils utilisateurs. Moderne, propre et évolutive.",
        tags: ["TypeScript", "React", "AppWrite", "Tailwind CSS"],
        categories: ["Web", "Full Stack"],
        image: socialmedia,
        year: "2025",
        links: {
          code: "https://github.com/louals/Kotlin_SpecieApp",
          demo: snapvid,
        },
      },
    ],
    linkLabels: {
      github: "GitHub",
      liveDemo: "Démo en ligne",
    },
  }
}