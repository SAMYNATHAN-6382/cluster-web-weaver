
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    company: "TechCorp Global",
    industry: "E-commerce",
    title: "Scaling to Handle 10x Black Friday Traffic",
    description: "How TechCorp used Kubernetes and Helm to handle unprecedented traffic spikes during their biggest sales event.",
    results: ["300% faster deployment time", "99.99% uptime during peak", "67% reduction in infrastructure costs"]
  },
  {
    company: "CloudServe Solutions",
    industry: "SaaS Provider",
    title: "Migrating Legacy Applications to Containers",
    description: "CloudServe's journey migrating 40+ legacy applications to containerized microservices architecture.",
    results: ["Reduced deployment cycles from weeks to hours", "Improved resource utilization by 45%", "Enabled continuous delivery pipeline"]
  },
  {
    company: "FinSecure Bank",
    industry: "Financial Services",
    title: "Building a Secure, Compliant Kubernetes Platform",
    description: "How FinSecure implemented a secure, compliant Kubernetes platform while meeting strict regulatory requirements.",
    results: ["Passed all compliance audits with zero findings", "Reduced security incident response time by 75%", "Implemented automated security scanning"]
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-kubernetes-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kubernetes-navy mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how organizations are transforming their infrastructure with Kubernetes and Helm.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium px-3 py-1 bg-kubernetes-lightBlue text-kubernetes-blue rounded-full">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-kubernetes-navy mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  {study.company}
                </p>
                <p className="text-gray-600 mb-6">
                  {study.description}
                </p>
                <div className="space-y-2 mb-4">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center">
                      <span className="bg-green-100 rounded-full p-1 mr-2">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-100 p-4">
                <a 
                  href="#" 
                  className="text-kubernetes-blue font-medium hover:text-kubernetes-navy flex items-center"
                >
                  Read full case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-kubernetes-blue text-kubernetes-blue hover:bg-kubernetes-lightBlue">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
