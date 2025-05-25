const healthData = {
  "status": "ok",
  "totalResults": 10,
  "articles": [
    {
      "source": {
        "id": "medical-news-today",
        "name": "Medical News Today"
      },
      "author": "Dr. Rachel Green",
      "title": "Revolutionary Alzheimer's Treatment Shows Remarkable Results in Clinical Trials",
      "description": "Breakthrough therapy demonstrates significant cognitive improvement in Alzheimer's patients, offering new hope for neurodegenerative disease treatment.",
      "url": "https://www.medicalnewstoday.com/alzheimers-treatment-breakthrough",
      "urlToImage": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "publishedAt": "2024-12-15T11:20:00Z",
      "content": "A groundbreaking Alzheimer's treatment has shown unprecedented success in clinical trials, with patients experiencing significant cognitive improvements and slowed disease progression. The therapy targets amyloid plaques in the brain using innovative immunotherapy approaches. This breakthrough offers new hope for millions of families affected by Alzheimer's disease and represents a major advancement in neurodegenerative disease treatment."
    },
    {
      "source": {
        "id": "harvard-health",
        "name": "Harvard Health Publishing"
      },
      "author": "Dr. Michael Thompson",
      "title": "Personalized Medicine Revolution: DNA-Based Treatment Plans Transform Healthcare",
      "description": "Genetic analysis enables customized medical treatments tailored to individual patient DNA profiles, improving treatment effectiveness and reducing side effects.",
      "url": "https://www.health.harvard.edu/personalized-medicine-dna-treatment",
      "urlToImage": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "publishedAt": "2024-12-15T10:05:00Z",
      "content": "Personalized medicine has reached a new milestone with DNA-based treatment plans becoming standard practice in leading medical centers. Genetic analysis allows physicians to prescribe medications and treatments specifically tailored to each patient's genetic makeup, significantly improving treatment outcomes while minimizing adverse reactions. This approach represents a fundamental shift toward precision healthcare and individualized patient care."
    },
    {
      "source": {
        "id": "mayo-clinic",
        "name": "Mayo Clinic News"
      },
      "author": "Dr. Sarah Davis",
      "title": "Robotic Surgery Advances Enable Minimally Invasive Complex Procedures",
      "description": "Next-generation surgical robots perform intricate operations with unprecedented precision, reducing patient recovery time and improving outcomes.",
      "url": "https://www.mayoclinic.org/robotic-surgery-advances",
      "urlToImage": "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
      "publishedAt": "2024-12-15T09:30:00Z",
      "content": "Advanced robotic surgery systems are revolutionizing complex medical procedures by enabling minimally invasive operations with extraordinary precision. These systems allow surgeons to perform intricate procedures through tiny incisions, resulting in faster patient recovery, reduced complications, and improved surgical outcomes. The technology represents a significant advancement in surgical care and patient safety."
    },
    {
      "source": {
        "id": "johns-hopkins",
        "name": "Johns Hopkins Medicine"
      },
      "author": "Dr. Lisa Wang",
      "title": "Breakthrough in Diabetes Treatment: Artificial Pancreas System Approved",
      "description": "Automated insulin delivery system provides continuous glucose monitoring and insulin adjustment, transforming diabetes management for patients.",
      "url": "https://www.hopkinsmedicine.org/artificial-pancreas-system",
      "urlToImage": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "publishedAt": "2024-12-15T08:15:00Z",
      "content": "A revolutionary artificial pancreas system has received approval for widespread use, offering automated insulin delivery for diabetes patients. The system continuously monitors blood glucose levels and automatically adjusts insulin delivery, significantly improving glucose control while reducing the burden of diabetes management. This breakthrough technology promises to transform the lives of millions of people living with diabetes worldwide."
    },
    {
      "source": {
        "id": "cleveland-clinic",
        "name": "Cleveland Clinic"
      },
      "author": "Dr. Robert Kim",
      "title": "Heart Disease Prevention: AI Predicts Cardiovascular Risk with 95% Accuracy",
      "description": "Artificial intelligence system analyzes multiple health factors to predict heart disease risk years before symptoms appear, enabling preventive interventions.",
      "url": "https://www.clevelandclinic.org/ai-cardiovascular-risk-prediction",
      "urlToImage": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "publishedAt": "2024-12-15T07:00:00Z",
      "content": "An advanced artificial intelligence system has demonstrated 95% accuracy in predicting cardiovascular disease risk up to five years before symptoms develop. The AI analyzes multiple health indicators including genetic factors, lifestyle data, and medical history to identify high-risk patients. This breakthrough enables early intervention strategies that could prevent heart attacks and strokes, potentially saving millions of lives."
    },
    {
      "source": {
        "id": "webmd",
        "name": "WebMD"
      },
      "author": "Dr. Jennifer Martinez",
      "title": "Mental Health Innovation: Digital Therapy Shows Effectiveness Equal to Traditional Treatment",
      "description": "App-based mental health interventions demonstrate clinical effectiveness comparable to in-person therapy, expanding access to mental healthcare.",
      "url": "https://www.webmd.com/digital-therapy-mental-health",
      "urlToImage": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "publishedAt": "2024-12-15T06:20:00Z",
      "content": "Digital mental health therapy platforms have demonstrated clinical effectiveness equal to traditional in-person treatment for anxiety and depression. These app-based interventions use evidence-based therapeutic techniques and provide 24/7 accessibility to mental health support. The technology addresses the growing mental health crisis by expanding access to quality care and reducing barriers to treatment."
    },
    {
      "source": {
        "id": "healthline",
        "name": "Healthline"
      },
      "author": "Dr. David Rodriguez",
      "title": "Regenerative Medicine Breakthrough: Lab-Grown Organs Successfully Transplanted",
      "description": "Bioengineered organs grown from patient's own cells eliminate transplant rejection risk and address critical organ shortage.",
      "url": "https://www.healthline.com/regenerative-medicine-organ-transplant",
      "urlToImage": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "publishedAt": "2024-12-15T05:35:00Z",
      "content": "Regenerative medicine has achieved a historic milestone with successful transplantation of laboratory-grown organs created from patients' own cells. This breakthrough eliminates transplant rejection risks and offers hope for addressing the critical shortage of donor organs. The technology represents a paradigm shift in transplant medicine and could revolutionize treatment for organ failure patients worldwide."
    },
    {
      "source": {
        "id": "nature-medicine",
        "name": "Nature Medicine"
      },
      "author": "Dr. Amanda Chen",
      "title": "Cancer Screening Revolution: Blood Test Detects 50 Types of Cancer Early",
      "description": "Multi-cancer early detection blood test identifies various cancer types in early stages when treatment is most effective.",
      "url": "https://www.nature.com/articles/multi-cancer-blood-test",
      "urlToImage": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "publishedAt": "2024-12-15T04:50:00Z",
      "content": "A revolutionary blood test capable of detecting over 50 different types of cancer in early stages has shown remarkable accuracy in clinical trials. The test analyzes circulating tumor DNA and other biomarkers to identify cancer presence before symptoms appear. This breakthrough could transform cancer screening and significantly improve survival rates by enabling treatment when cancers are most treatable."
    },
    {
      "source": {
        "id": "stanford-medicine",
        "name": "Stanford Medicine"
      },
      "author": "Dr. Kevin Park",
      "title": "Telemedicine Expansion: Remote Healthcare Reaches Underserved Communities",
      "description": "Advanced telemedicine platforms bring specialist medical care to remote and underserved populations, improving healthcare accessibility worldwide.",
      "url": "https://med.stanford.edu/telemedicine-expansion",
      "urlToImage": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "publishedAt": "2024-12-15T03:25:00Z",
      "content": "Telemedicine technology has expanded dramatically to reach underserved communities worldwide, providing access to specialist medical care previously unavailable in remote areas. Advanced platforms enable real-time consultations, remote monitoring, and digital health services that bridge geographical barriers to healthcare. This expansion represents a significant step toward healthcare equity and improved global health outcomes."
    }
  ]
};

export default healthData;
