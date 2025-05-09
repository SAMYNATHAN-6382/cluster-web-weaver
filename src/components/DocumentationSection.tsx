
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, ChevronRight } from "lucide-react";

const docSections = [
  {
    title: "Getting Started",
    items: ["Installation Guide", "Quick Start Tutorial", "Basic Concepts", "Configuration Options"]
  },
  {
    title: "Kubernetes Basics",
    items: ["Cluster Architecture", "Pods and Containers", "Services and Networking", "Storage Options"]
  },
  {
    title: "Helm Charts",
    items: ["Chart Structure", "Template Guide", "Dependencies", "Repositories"]
  },
  {
    title: "Advanced Topics",
    items: ["High Availability", "Security Best Practices", "Performance Tuning", "Troubleshooting"]
  }
];

const DocumentationSection = () => {
  const [expandedSection, setExpandedSection] = useState("Getting Started");
  
  const toggleSection = (title: string) => {
    if (expandedSection === title) {
      setExpandedSection("");
    } else {
      setExpandedSection(title);
    }
  };
  
  return (
    <section id="documentation" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kubernetes-navy mb-4">
            Comprehensive Documentation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Detailed guides and tutorials to help you master Kubernetes and Helm deployments.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="search" 
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kubernetes-blue focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {docSections.map((section) => (
              <div key={section.title} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleSection(section.title)}
                  className={`w-full flex justify-between items-center px-5 py-4 text-left font-medium ${
                    expandedSection === section.title ? 'bg-kubernetes-lightBlue text-kubernetes-blue' : 'bg-white text-kubernetes-navy'
                  }`}
                >
                  {section.title}
                  {expandedSection === section.title ? 
                    <ChevronDown className="h-5 w-5" /> : 
                    <ChevronRight className="h-5 w-5" />
                  }
                </button>
                
                {expandedSection === section.title && (
                  <div className="px-5 py-3 bg-white border-t border-gray-200">
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a href="#" className="text-gray-600 hover:text-kubernetes-blue block py-1">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            
            <div className="mt-6">
              <Button variant="outline" className="w-full border-kubernetes-blue text-kubernetes-blue hover:bg-kubernetes-lightBlue">
                View All Documentation
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <div className="bg-kubernetes-lightBlue rounded-full p-2 mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#326CE5" strokeWidth="2"/>
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#326CE5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-kubernetes-navy">Installation Guide</h3>
            </div>
            
            <div className="prose max-w-none">
              <h4>Prerequisites</h4>
              <p>Before you begin, ensure you have the following installed:</p>
              <ul>
                <li>Docker (version 19.0 or later)</li>
                <li>kubectl command line tool</li>
                <li>Helm (version 3.0 or later)</li>
              </ul>
              
              <h4>Step 1: Install kubectl</h4>
              <p>The Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters.</p>
              <pre className="bg-gray-50 p-3 rounded-md overflow-x-auto text-sm">
                <code>$ curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"</code>
              </pre>
              
              <h4>Step 2: Install Helm</h4>
              <p>Helm is a package manager for Kubernetes that helps you define, install, and upgrade Kubernetes applications.</p>
              <pre className="bg-gray-50 p-3 rounded-md overflow-x-auto text-sm">
                <code>$ curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash</code>
              </pre>
              
              <p>Continue reading for more detailed instructions and platform-specific guidance...</p>
              
              <div className="mt-6">
                <Button className="bg-kubernetes-blue hover:bg-kubernetes-navy text-white">
                  Continue Reading
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
