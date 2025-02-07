import { ShieldCheck, Globe, Settings } from "lucide-react";

const DomainRegistration = () => {
  const features = [
    {
      icon: <Globe size={48} className="text-white" />,
      title: "Get a Free Domain Name",
      description:
        "With most of Hostrever's web hosting plans, you can register a domain name for free. Choose from popular extensions like .com, .net, .org, and more – all included at no extra cost!",
    },
    {
      icon: <ShieldCheck size={48} className="text-white" />,
      title: "Free Privacy Protection",
      description:
        "When you register a domain, your personal information is typically visible on public databases like WHOIS. At Hostrever, we prioritize your privacy by safeguarding your domain registration data. Our free privacy protection service keeps your details hidden from third parties, ensuring maximum security and peace of mind.",
    },
    {
      icon: <Settings size={48} className="text-white" />,
      title: "Easy Domain Management",
      description:
        "Managing your domain names has never been easier. Whether you own one domain or thousands, Hostrever's user-friendly client portal lets you seamlessly handle everything in one place. Powered by innovation, tailored for you!",
    },
  ];

  return (
    <div className="bg-[#09113f] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">
            Why choose Hostrever for Domain Name Registration?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Deliver exceptional reliability and seamless efficiency to ensure a smooth experience for your website
            visitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#0918f] rounded-lg p-2 flex flex-col items-center text-center">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-white text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainRegistration;
