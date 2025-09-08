export default function Publications() {
  const researchData = [
    {
      title:
        "A Hybrid Deep Learning and Handcrafted Feature Fusion Framework for Tea Leaf Disease Classification with Explainable AI",
      degree: "B.Sc. in Engineering Thesis",
      institution: "University of Chittagong, Department of Computer Science and Engineering",
      year: "2025",
      abstract: `This thesis presents a lightweight hybrid model for automated tea leaf disease classification, 
      combining handcrafted features (LBP, color histograms) with deep features from a fine-tuned MobileNetV2. 
      The approach enhances classification accuracy (99.17%) while maintaining computational efficiency. 
      Explainable AI methods (Grad-CAM, SHAP) provide spatial and feature-level interpretability, 
      making the system transparent and trustworthy. 
      With over 5,867 images across six classes, the proposed model is suitable for mobile and IoT deployment, 
      offering a scalable solution for sustainable tea production.`,
      keywords: [
        "CNN",
        "Tea Leaf Disease Classification",
        "LBP",
        "Color Histogram",
        "Feature Fusion",
        "Explainable AI",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">Research</h1>
      <div className="w-full max-w-4xl space-y-8">
        {researchData.map((research, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{research.title}</h2>
            <p className="text-lg text-gray-800 font-medium mb-1 italic">{research.degree}</p>
            <p className="text-gray-700 font-medium mb-1">{research.institution}</p>
            <p className="text-sm text-gray-500 mb-4">{research.year}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{research.abstract}</p>
            <div className="flex flex-wrap gap-2">
              {research.keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
