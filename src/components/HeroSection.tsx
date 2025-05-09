
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-kubernetes-lightBlue to-white pt-16 pb-20 md:py-28 bg-grid-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kubernetes-navy leading-tight mb-6">
              Deploy and Manage 
              <span className="text-kubernetes-blue"> Kubernetes </span>
              Clusters with Helm
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Simplify container orchestration and application deployment with our comprehensive platform for Kubernetes management and Helm chart deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-kubernetes-blue hover:bg-kubernetes-navy text-white px-8 py-6 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-kubernetes-blue text-kubernetes-blue hover:bg-kubernetes-lightBlue px-8 py-6 text-lg">
                View Documentation
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-kubernetes-teal rounded-full w-20 h-20 opacity-20 animate-float delay-300"></div>
              <div className="absolute bottom-0 left-0 -mb-6 -ml-6 bg-kubernetes-blue rounded-full w-16 h-16 opacity-10 animate-float delay-700"></div>
              
              <svg className="w-full h-auto animate-float" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 44.8C242.9 44.8 231.8 50.9 226.6 61.1L132.5 226.6C127.4 236.8 127.4 248.9 132.5 259.1L226.6 424.6C231.8 434.8 242.9 440.9 256 440.9C269.1 440.9 280.2 434.8 285.4 424.6L379.5 259.1C384.6 248.9 384.6 236.8 379.5 226.6L285.4 61.1C280.2 50.9 269.1 44.8 256 44.8Z" stroke="#326CE5" strokeWidth="12"/>
                <path d="M150.2 169.6C143.1 162.5 133.2 159.2 123.9 161.3L40.8 176.5C31.5 178.6 23.9 185.7 21.1 195C18.3 204.2 20.8 214.2 27.9 221.3L91.9 285.3C99 292.4 108.9 295.7 118.2 293.6L201.3 278.4C210.6 276.3 218.2 269.2 221 259.9C223.8 250.7 221.3 240.7 214.2 233.6L150.2 169.6Z" stroke="#326CE5" strokeWidth="10"/>
                <path d="M361.8 169.6C368.9 162.5 378.8 159.2 388.1 161.3L471.2 176.5C480.5 178.6 488.1 185.7 490.9 195C493.7 204.2 491.2 214.2 484.1 221.3L420.1 285.3C413 292.4 403.1 295.7 393.8 293.6L310.7 278.4C301.4 276.3 293.8 269.2 291 259.9C288.2 250.7 290.7 240.7 297.8 233.6L361.8 169.6Z" stroke="#326CE5" strokeWidth="10"/>
                <circle cx="256" cy="256" r="50" fill="#326CE5" fillOpacity="0.2" stroke="#326CE5" strokeWidth="12"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
