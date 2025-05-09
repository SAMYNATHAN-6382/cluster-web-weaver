
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install Dependencies",
    description: "Install kubectl, helm, and other required tools for your operating system.",
    code: "$ curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl\n$ chmod +x ./kubectl\n$ sudo mv ./kubectl /usr/local/bin/kubectl"
  },
  {
    number: "02",
    title: "Configure Cluster",
    description: "Set up your Kubernetes cluster or connect to an existing one.",
    code: "$ kubectl config use-context my-cluster-name\n$ kubectl get nodes"
  },
  {
    number: "03",
    title: "Deploy with Helm",
    description: "Deploy applications using Helm charts with simple commands.",
    code: "$ helm repo add bitnami https://charts.bitnami.com/bitnami\n$ helm install my-release bitnami/nginx"
  }
];

const GetStartedSection = () => {
  return (
    <section id="get-started" className="py-16 md:py-24 bg-kubernetes-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kubernetes-navy mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to deploy your first application with Kubernetes and Helm.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl font-bold text-kubernetes-blue opacity-30">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-kubernetes-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
              </div>
              <div className="bg-gray-900 text-white p-4 overflow-x-auto">
                <pre className="text-sm"><code>{step.code}</code></pre>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-kubernetes-blue hover:bg-kubernetes-navy text-white px-8 py-6 text-lg">
            Complete Documentation
          </Button>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-sm border border-gray-100 p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-kubernetes-navy mb-4">
                Ready to scale your applications?
              </h3>
              <p className="text-gray-600 mb-6">
                Our enterprise plan includes dedicated support, advanced features, and priority updates.
              </p>
              <div className="space-y-3">
                {[
                  "24/7 Technical Support",
                  "High Availability Configuration",
                  "Custom Integrations",
                  "Training and Onboarding"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Button className="bg-kubernetes-teal hover:bg-kubernetes-navy text-white px-8 py-6 w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
