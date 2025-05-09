
import { 
  Cloud, 
  BarChart3, 
  Shield, 
  GitBranch, 
  Zap, 
  RefreshCw,
  Terminal,
  Settings
} from "lucide-react";

const features = [
  {
    icon: <Cloud className="h-8 w-8 text-kubernetes-blue" />,
    title: "Multi-Cloud Deployment",
    description: "Deploy your applications across multiple cloud providers with consistent configuration and management."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-kubernetes-blue" />,
    title: "Advanced Monitoring",
    description: "Built-in monitoring tools provide real-time insights into cluster health and performance metrics."
  },
  {
    icon: <Shield className="h-8 w-8 text-kubernetes-blue" />,
    title: "Enhanced Security",
    description: "Implement security best practices with RBAC, network policies, and secret management tools."
  },
  {
    icon: <GitBranch className="h-8 w-8 text-kubernetes-blue" />,
    title: "CI/CD Integration",
    description: "Seamlessly integrate with popular CI/CD pipelines for automated deployment workflows."
  },
  {
    icon: <Zap className="h-8 w-8 text-kubernetes-blue" />,
    title: "Auto-Scaling",
    description: "Automatically scale your applications based on CPU, memory usage, or custom metrics."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-kubernetes-blue" />,
    title: "Zero Downtime Updates",
    description: "Rolling updates and canary deployments ensure continuous availability during upgrades."
  },
  {
    icon: <Terminal className="h-8 w-8 text-kubernetes-blue" />,
    title: "Advanced CLI Tools",
    description: "Powerful command-line tools for efficient cluster management and troubleshooting."
  },
  {
    icon: <Settings className="h-8 w-8 text-kubernetes-blue" />,
    title: "Custom Resource Definitions",
    description: "Extend Kubernetes API with custom resources to manage specialized workloads."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kubernetes-navy mb-4">
            Powerful Features for Modern Applications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform provides everything you need to deploy, scale, and manage containerized applications with Kubernetes and Helm.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-kubernetes-lightBlue rounded-lg p-3 inline-flex mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-kubernetes-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
