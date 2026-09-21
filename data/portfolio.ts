export const email = '[sarohapikakshi@gmail.com]'

export const projects = [
  {
    id: 'nyxai',
    name: 'NyxAI',
    subtitle: 'Offline AI Assistant',
    description:
      'A local AI assistant with contextual memory and a locally running LLM.',
    tech: ['Python', 'Flask', 'Ollama', 'JavaScript'],
    concept:
      'NyxAI is a privacy-focused conversational AI assistant designed to run locally rather than relying on external AI APIs.',
    problem:
      'Cloud-based AI assistants generally require internet connectivity and may send conversation data to external services.',
    solution:
      'NyxAI runs a local language model through Ollama and connects it to a lightweight Flask web interface with contextual memory.',
    github: 'https://github.com/pikakshi01/Nyx-AI',
  },

  {
    id: 'portfolioweb',
    name: 'PortfolioWeb',
    subtitle: 'Resume-Based Job Recommendation',
    description:
      'A platform that analyzes resumes and recommends relevant job opportunities.',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    concept:
      'PortfolioWeb is a resume-driven job recommendation platform that matches a student’s skills and profile with relevant opportunities.',
    problem:
      'Students often have to manually compare their skills, experience, and qualifications against a large number of job listings.',
    solution:
      'The platform accepts a resume, extracts and analyzes relevant information, and uses it to surface suitable job opportunities with eligibility-oriented matching and application links.',
    github: 'https://github.com/pikakshi01/PortfolioWeb',
  },

  {
    id: 'semantic',
    name: 'DocSearch',
    subtitle: 'On-Device Document Retrieval',
    description:
      'A multilingual hybrid retrieval system combining keyword and semantic search for local documents.',
    tech: ['Python', 'FAISS', 'Embeddings', 'Cross-Encoder'],
    concept:
      'A privacy-friendly document retrieval system designed to understand the meaning behind queries across multiple languages.',
    problem:
      'Traditional keyword search can miss relevant documents when the wording differs from the query or when the query and document use different languages.',
    solution:
      'The system combines keyword and semantic retrieval, fuses results using Reciprocal Rank Fusion, and applies cross-encoder re-ranking to improve the relevance of retrieved documents.',
    github: '[PROJECT GITHUB LINK]',
  },

  {
    id: 'fog',
    name: 'MATLAB Fog Security Model',
    subtitle: 'Smart-City Anomaly Detection',
    description:
      'A simulated fog-computing IoT/WSN environment for detecting manipulated sensor data.',
    tech: ['MATLAB', 'Fog Computing', 'DEEC', 'MAD'],
    concept:
      'A cybersecurity-focused simulation of a heterogeneous wireless sensor network using fog computing for anomaly detection.',
    problem:
      'Manipulated or abnormal sensor readings can affect decisions and reduce the reliability of distributed smart-city infrastructure.',
    solution:
      'The model simulates a heterogeneous WSN and uses DEEC-based organization together with Median Absolute Deviation to identify anomalous or potentially manipulated sensor readings.',
    github: '[PROJECT GITHUB LINK]',
  },

  {
    id: 'scheduni',
    name: 'SchedUni',
    subtitle: 'Smart University Classroom App',
    description:
      'A university classroom management application inspired by familiar digital learning platforms.',
    tech: ['Android Studio', 'Firebase', 'Figma'],
    concept:
      'SchedUni is a student-focused university classroom application designed to bring common classroom and course interactions into one digital environment.',
    problem:
      'University course communication, classroom information, and academic workflows can become fragmented across multiple tools.',
    solution:
      'SchedUni brings classroom-oriented interactions into a single student-facing application using Android development, Firebase, and a structured UI designed in Figma.',
    github: 'https://github.com/pikakshi01/SchedUni-university-classroom-app',
  },

  {
    id: 'queue',
    name: 'IoT Smart Queue Management',
    subtitle: 'Connected Queue Automation',
    description:
      'An IoT-based queue management prototype using ESP32, LCD display, and Telegram integration.',
    tech: ['ESP32', 'Telegram Bot', 'LCD', 'Wokwi'],
    concept:
      'An IoT-based system designed to digitally communicate and manage queue status in a physical service environment.',
    problem:
      'Manual queue management can create uncertainty for users and make it difficult to efficiently communicate queue status.',
    solution:
      'The prototype uses an ESP32 with an LCD display and Telegram Bot integration to communicate queue information and automate parts of the queue-management process.',
    github: '[PROJECT GITHUB LINK]',
  },
]

export const tech = [
 ['Languages',['HTML','CSS','JavaScript','Python','Java','SQL']],
 ['Frameworks / Libraries',['Flask','React','Pandas','NumPy','Matplotlib']],
 ['AI / ML',['Ollama','Scikit-learn','Machine Learning']],
 ['Cybersecurity',['Wireshark','FTK Imager']],
 ['Databases',['MySQL','SQLite']],
 ['Tools & Platforms',['Git','GitHub','Figma','VS Code','IntelliJ IDEA','Linux','MATLAB','Android Studio']]
] as const

export const certifications = [
 {name:'Generative AI with LangChain and Hugging Face', issuer:'Udemy', detail:'Generative AI course focused on LangChain and Hugging Face.'},
 {name:'Cybersecurity Analyst Job Simulation', issuer:'Tata', detail:'Cybersecurity job simulation credential.'},
 {name:'Cybersecurity Job Simulation', issuer:'Mastercard', detail:'Cybersecurity job simulation credential.'},
 {name:'Cybersecurity Foundation', issuer:'Palo Alto Networks', detail:'Cybersecurity foundation learning credential.'},
 {name:'CyberSecurity 101', issuer:'Pregrad', detail:'Foundational cybersecurity credential.'},
 {name:'AI and Data Analytics Workshop', issuer:'BML Munjal University', detail:'AI and data analytics workshop credential.'}
]
