"use client"

// This file maps technology names to their respective icons
import { 
  FaReact, FaPython, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDocker, 
  FaAws, FaGithub, FaGitAlt, FaDatabase
} from 'react-icons/fa';
import { 
  SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, SiMysql, 
  SiOpenai, SiJupyter, SiGooglecloud, SiKubernetes,
  SiScikitlearn, SiNumpy, SiPandas, SiFlask, SiDjango, SiExpress,
  SiTypescript, SiLangchain, SiElasticsearch, SiNextdotjs,
  SiTailwindcss, SiBootstrap, SiSupabase, SiFirebase, SiRedis, 
  SiGrafana, SiPrometheus, SiHeroku, SiVercel, SiC, SiCplusplus,
  SiApachekafka, SiApachespark, SiTableau, SiStreamlit, SiFastapi,
  SiAutodesk
} from 'react-icons/si';
import { IoLogoVue } from 'react-icons/io5';
import { TbBrandReactNative } from 'react-icons/tb';
import { LuBrainCircuit } from 'react-icons/lu';
import { BiCodeCurly, BiLogoJavascript } from 'react-icons/bi';
import { MdAutoGraph } from 'react-icons/md';
import { BsTelegram, BsDatabase } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { FcDataProtection } from 'react-icons/fc';

// Generic component for technologies that don't have specific icons
import { Code } from "lucide-react";

// Define the map of technology names to their icons
const techIconsMap = {
  // Programming Languages
  "Python": FaPython,
  "JavaScript": BiLogoJavascript,
  "TypeScript": SiTypescript,
  "Java": FaJava,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "C": SiC,
  "C++": SiCplusplus,
  "SQL": BsDatabase,
  
  // Frontend
  "React": FaReact,
  "Next.js": SiNextdotjs,
  "Vue.js": IoLogoVue,
  "React Native": TbBrandReactNative,
  "Tailwind CSS": SiTailwindcss,
  "Bootstrap": SiBootstrap,
  
  // Backend
  "Node.js": FaNodeJs,
  "Express": SiExpress,
  "Flask": SiFlask,
  "Django": SiDjango,
  "FastAPI": SiFastapi,
  
  // Databases
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "Redis": SiRedis,
  
  "Elasticsearch": SiElasticsearch,
  "ElasticSearch": SiElasticsearch,
  "Supabase": SiSupabase,
  "Supabase S3": SiSupabase,
  "Firebase": SiFirebase,
  "Cassandra": FaDatabase,
  "AstraDB": FaDatabase,
    // ML/AI
  "TensorFlow": SiTensorflow,
  "PyTorch": SiPytorch,
  "Scikit-learn": SiScikitlearn,
  "scikit-learn": SiScikitlearn,
  "NumPy": SiNumpy,
  "Pandas": SiPandas,
  "OpenAI": SiOpenai,
  "BERT": LuBrainCircuit,
  "RAG": LuBrainCircuit,
  "Langchain": SiLangchain,
  "Jupyter": SiJupyter,
  "NLP": LuBrainCircuit,
  "Neural Networks": LuBrainCircuit,
  "OpenCV": Code,
  "Seaborn": Code,
  "SpaCy": Code,
  "NLTK": Code,
  "LangChain": SiLangchain,
  "Transformers": LuBrainCircuit,
  "Gemini": SiOpenai,
  "Cohere LLM": LuBrainCircuit,
  "Claude": LuBrainCircuit,
  "Contrastive Learning": SiPytorch,
  "cGANs": SiPytorch,
  "CrossModal Attention": SiPytorch,
  
  // DevOps & Cloud
  "Docker": FaDocker,
  "Kubernetes": SiKubernetes,
  "AWS": FaAws,
  "GCP": SiGooglecloud,
  "Azure": Code,
  "GitHub": FaGithub,
  "Git": FaGitAlt,
  "CI/CD": BiCodeCurly,  "Grafana": SiGrafana,
  "Prometheus": SiPrometheus,
  "Heroku": SiHeroku,
  "Vercel": SiVercel,
  
  // Big Data
  "Kafka": SiApachekafka,
  "Spark": SiApachespark,
  "Apache Spark": SiApachespark,
  "Apache Kafka": SiApachekafka,
  "GCP BigQuery": SiGooglecloud,
  "BigQuery": SiGooglecloud,
  
  // Web Technologies
  "Streamlit": SiStreamlit,
  "Telegram Bot": BsTelegram,
  "BM25": Code,
  
  // Tools
  "Tableau": SiTableau,
  "AutoCAD": SiAutodesk,
  "LangFlow": SiLangchain,

};

// Function to get icon for a technology
export const getTechIcon = (techName: string) => {
  const IconComponent = techIconsMap[techName as keyof typeof techIconsMap] || Code;
  return IconComponent;
};

export default techIconsMap;
