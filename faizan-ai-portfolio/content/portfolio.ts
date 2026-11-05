/** Single source of truth. Only include documented, user-approved professional claims. */
export const profile = {
  name: 'Faizan Ahmed Khan',
  initials: 'FA',
  title: 'AI / Machine Learning Engineer',
  specialization: 'Generative AI · Agentic Systems · Arabic NLP · MLOps',
  headline: 'Engineering Intelligence. Building What’s Next.',
  subheadline: 'I design, fine-tune, and ship production-ready language models, intelligent agents, and AI systems built for the real world.',
  tagline: 'From prototype to production. From research to reality.',
  experience: '3+',
  location: 'Open to global opportunities',
  availability: { enabled: true, label: 'Available for AI engineering roles' },
  email: 'khanfaizan1532001@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faizan-ahmedkhan/',
  github: 'https://github.com/FaizanAKhan786',
  resume: '/Faizan_Ahmed_Khan_Resume.pdf',
  githubUsername: 'FaizanAKhan786',
} as const;

export type Category = 'GenAI' | 'Agentic AI' | 'NLP' | 'Computer Vision' | 'MLOps';
export type Project = {
  id: string; index: string; name: string; eyebrow: string; category: Category[]; kind: 'voice'|'agent'|'translate'|'rag'|'graph'|'dialect'|'interview';
  description: string; challenge: string; architecture: string[]; results: string[]; tech: string[];
  github?: string; demo?: string; label?: string; origin: 'Open source'|'Professional work'|'Research'|'Prototype';
};
export const projects: Project[] = [
  {
    id: 'sada', index: '01', name: 'SADA Voice AI', eyebrow: 'BILINGUAL VOICE INTELLIGENCE', category: ['GenAI','NLP','Agentic AI'], kind:'voice', origin:'Open source',
    description:'An Arabic–English voice assistant prototype with interruption-aware conversations, speech recognition, and a live SaaS-style demo.',
    challenge:'Real-time voice UX needs reliable turn-taking, low-latency responses, and honest fallback behavior even when speech or model services are unavailable.',
    architecture:['Browser microphone + AudioWorklet','WebSocket PCM streaming + VAD','Optional Whisper transcription','Deterministic intents / hosted or local LLM','Streaming text and browser TTS'],
    results:['Working public synthetic-data demo','Interruption-aware playback and deterministic order-flow simulations','No production CRM or telephony connection'],
    tech:['FastAPI','WebSockets','Whisper','Ollama','JavaScript'], github:'https://github.com/FaizanAKhan786/sada-voice-ai', demo:'https://sada-voice-ai.onrender.com', label:'LIVE DEMO',
  },
  {
    id:'muhawir',index:'02',name:'Muhawir',eyebrow:'AGENTIC KNOWLEDGE ENGINE',category:['GenAI','Agentic AI','NLP','MLOps'],kind:'agent',origin:'Open source',
    description:'A bilingual agentic RAG assistant combining adaptive LangGraph orchestration, hybrid retrieval, reranking, guardrails, and regression evaluation.',
    challenge:'Arabic/English queries need normalization, citation discipline, dependable multi-hop retrieval, and evaluation that catches failures before deployment.',
    architecture:['Input guardrails + language detection','Query decomposition with LangGraph','BM25 + dense vector search','Reciprocal Rank Fusion + reranking','Citation-grounded synthesis + quality gates'],
    results:['250-example bilingual evaluation suite described in project CV','RAGAS quality gates, MLflow tracking and CI workflows','Repo is an engineering demonstration, not a hosted enterprise integration'],
    tech:['LangGraph','Qdrant','Redis','FastAPI','RAGAS','Docker'],github:'https://github.com/FaizanAKhan786/muhawir',
  },
  {
    id:'nmt',index:'03',name:'Offline Neural Translation',eyebrow:'ENTERPRISE / AIR-GAPPED AI',category:['NLP','MLOps'],kind:'translate',origin:'Professional work',
    description:'English–Arabic document translation for restricted environments, optimized for CPU inference without external API dependencies.',
    challenge:'Run domain-adapted multilingual translation on constrained infrastructure without compromising the offline requirement.',
    architecture:['OCR / text ingestion','Arabic text normalization','Domain-adapted NLLB-200 inference','INT8 model quantization','FastAPI serving on offline infrastructure'],
    results:['BLEU improved from 57 to 85 on reported internal evaluation','Model footprint reduced from 2.4 GB to 600 MB','3× faster inference reported in resume'],
    tech:['Python','NLLB-200','PyTorch','INT8','FastAPI'],
  },
  {
    id:'rag',index:'04',name:'Enterprise Multimodal RAG',eyebrow:'RETRIEVAL INTELLIGENCE',category:['GenAI','NLP','MLOps'],kind:'rag',origin:'Professional work',
    description:'An offline retrieval workflow over document and email knowledge with hybrid search, neural reranking, and conversational inference.',
    challenge:'Make large private document collections searchable without depending on external hosted model APIs.',
    architecture:['Private document ingestion','Chunking + metadata','BM25 and dense retrieval','Neural reranking','Ollama + ChromaDB response generation'],
    results:['Worked with 100,000+ document and email chunks','Hybrid BM25 / dense retrieval with reranking','Designed around offline serving constraints'],
    tech:['RAG','ChromaDB','Ollama','BM25','FastAPI'],
  },
  {
    id:'osint',index:'05',name:'OSINT Intelligence Graph',eyebrow:'GRAPH-DRIVEN DISCOVERY',category:['NLP','Agentic AI'],kind:'graph',origin:'Prototype',
    description:'An intelligence exploration concept connecting named entities and relationships across heterogeneous information sources.',
    challenge:'Turn unstructured sources into explorable, de-duplicated knowledge graphs with identifiable entity links.',
    architecture:['Source ingestion','Entity recognition','Entity resolution','Neo4j relationship graph','Interactive graph exploration'],
    results:['Architecture and prototype experience documented in project history','Visual graph on this portfolio is illustrative'],
    tech:['Python','BERT','Neo4j','NLP'],
  },
  {
    id:'lahja',index:'06',name:'Lahja',eyebrow:'GULF ARABIC MODEL LAB',category:['NLP','GenAI','MLOps'],kind:'dialect',origin:'Open source',
    description:'A reproducible Gulf Arabic dialect fine-tuning pipeline with QLoRA, evaluation, quantization, and FastAPI model serving.',
    challenge:'Adapt open models to regional Arabic dialects while keeping experiment tracking and deployment reproducible.',
    architecture:['Dataset preparation','4-bit QLoRA fine-tuning','Dialect and perplexity evaluation','INT4 / GGUF quantization','FastAPI streaming inference'],
    results:['Open-source repository with configuration-driven pipeline','Sample data and mock-model mode included for testability','Real model quality depends on training data and compute'],
    tech:['PyTorch','PEFT','TRL','QLoRA','FastAPI'],github:'https://github.com/FaizanAKhan786/lahja',
  },
  {
    id:'interview',index:'07',name:'InterviewLens AI',eyebrow:'MULTIMODAL CAREER INTELLIGENCE',category:['GenAI','Computer Vision','NLP'],kind:'interview',origin:'Open source',
    description:'A recorded-interview analysis application that connects rubric-based feedback with a personalized practice and learning workflow.',
    challenge:'Make AI feedback traceable to concrete moments and maintain consent-first handling of uploaded recordings.',
    architecture:['Consented recording upload','Transcription and segmentation','Rubric-grounded answer feedback','Study roadmap synthesis','Practice and export workspace'],
    results:['Source code and developer testing documented on GitHub','Not presented as a certified hiring assessment'],
    tech:['Python','FastAPI','Speech AI','NLP','React'],github:'https://github.com/FaizanAKhan786/interviewlens-ai',
  }
];

export const experience = [
  {period:'SEP 2025 — OCT 2026',role:'Machine Learning Engineer',company:'Global Tech Technology',location:'Doha, Qatar',type:'Industry',description:'Built Arabic/English language technology in offline government environments, including translation, speech processing, private retrieval and model serving.',highlights:['Domain-adapted translation and INT8 CPU inference','Private RAG pipelines and FastAPI services','Production-minded offline deployment and monitoring']},
  {period:'SEP 2024 — JUL 2025',role:'Machine Learning Researcher',company:'NIT Jalandhar',location:'Jalandhar, India',type:'Research',description:'Explored intrusion detection and network anomaly classification using classical machine learning and temporal modeling.',highlights:['CICIDS2017 research experiments','PCA, KNN, Random Forest, SVM and LSTM']},
  {period:'JUL 2022 — AUG 2023',role:'Machine Learning Engineer',company:'Goalwit Technologies',location:'New Delhi, India',type:'Industry',description:'Developed recommendation systems and conversational AI workflows with evaluation, cloud serving and application integration.',highlights:['Hybrid recommendation engine with A/B evaluation','Rasa assistant and AWS Lambda deployment']},
  {period:'2023 — 2025',role:'M.Tech, Artificial Intelligence',company:'NIT Jalandhar',location:'India',type:'Education',description:'Graduate studies in Computer Science and Engineering with an Artificial Intelligence specialization.',highlights:['Applied ML and AI research']},
  {period:'2018 — 2022',role:'B.Tech, Computer Science & Engineering',company:'Jamia Hamdard',location:'New Delhi, India',type:'Education',description:'Undergraduate degree in Computer Science and Engineering.',highlights:['Software engineering and computer science foundations']},
] as const;

export const skillGroups = [
  {name:'Core AI',color:'#8b8cfb',desc:'Training, evaluation, and modeling',skills:['Python','PyTorch','TensorFlow','Scikit-learn','Hugging Face']},
  {name:'GenAI & Agents',color:'#b28aff',desc:'Reasoning, retrieval, orchestration',skills:['LLMs','LangChain','LangGraph','LlamaIndex','RAG','AI Agents']},
  {name:'Language & Speech',color:'#5fcbe8',desc:'Multilingual modeling and understanding',skills:['Transformers','NLLB-200','M2M100','Whisper','OCR']},
  {name:'Vision',color:'#ffb77d',desc:'Visual perception and media',skills:['OpenCV','YOLO','MediaPipe']},
  {name:'MLOps',color:'#9dd8c6',desc:'Deployability and observability',skills:['Docker','Kubernetes','MLflow','GitLab CI/CD','Prometheus','Grafana']},
  {name:'Cloud & Data',color:'#d5a4ff',desc:'Infrastructure and persistence',skills:['AWS','Azure','GCP','PostgreSQL','FAISS','Qdrant','Neo4j']},
] as const;

export const architectures = [
  {id:'rag',name:'Enterprise RAG',sub:'Grounded answers, private data',nodes:['Documents','Chunking','Embeddings','Vector DB','Retrieval','LLM','Answer'],detail:'Ingest and index private content, combine sparse and semantic retrieval, rerank relevant context and ground generation in cited evidence.'},
  {id:'agent',name:'Multi-Agent Systems',sub:'Coordinated tool execution',nodes:['User Task','Planner','Router','Tool A','Tool B','Verifier','Response'],detail:'Decompose user intent into bounded steps. Route to tools, check the results and synthesize an answer with observable execution traces.'},
  {id:'inference',name:'LLM Inference',sub:'Optimize the serving path',nodes:['Request','Tokenizer','Queue','Model','KV Cache','Stream','Client'],detail:'Batch and manage model requests, reuse KV cache, tune quantization and deliver streamed tokens with operational guardrails.'},
  {id:'voice',name:'Voice Intelligence',sub:'Speech to speech',nodes:['Mic','VAD','ASR','Dialogue','LLM','TTS','Speaker'],detail:'Detect speech boundaries, transcribe an utterance, update conversational state, produce a reply and support interruption-aware playback.'},
  {id:'offline',name:'Offline AI Deployment',sub:'Secure, air-gapped serving',nodes:['Model','Adapt','Quantize','Package','Local API','Monitor','Operate'],detail:'Prepare and validate artifacts before transfer, quantize for available hardware, run local endpoints and monitor without external dependencies.'},
] as const;

export const highlights = [
  {label:'EXPERIENCE',value:'3+',suffix:'years',note:'Industry + research'},
  {label:'SELECTED WORK',value:String(projects.length).padStart(2,'0'),suffix:'projects',note:'Professional + open source'},
  {label:'LANGUAGES',value:'02',suffix:'focus',note:'Arabic + English AI'},
  {label:'ENGINEERING',value:'E2E',suffix:'systems',note:'Research to deployment'},
] as const;
