import ssl from './imgs/ssl.PNG';
import driver from './imgs/drivers.PNG';
import gurantee from './imgs/gurantee.PNG';
import bandwidth from './imgs/bandwidth.PNG';

const FeatureCard = () => {
  const features = [
    {
      icon: bandwidth,
      title: "Unmetered Bandwidth",
      description: "Enjoy unlimited bandwidth for your website – no caps or restrictions with our unmetered plans.",
    },
    {
      icon: driver,
      title: "Solid State Drives (SSDs)",
      description: "Experience faster website performance, improved caching, and quicker database queries with SSDs (up to 200% faster than HDDs).",
    },
    {
      icon: gurantee,
      title: "99.9% Uptime Guarantee",
      description: "In addition to our technical expertise, we also offer a 99.9% uptime guarantee – ensuring your website is always available.",
    },
    {
      icon: ssl,
      title: "Free SSL Certificate",
      description: "All of our hosting plans come with a free SSL certificate – protect your website and its visitors with this essential security feature.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png", // Online URL for "Advanced Control Panel"
      title: "Advanced Control Panel",
      description: "Manage your hosting with ease using our advanced and user-friendly control panel.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-6">
              <div className="flex justify-center items-center mb-6">
                <div className="relative w-24 h-24 flex items-center justify-center bg-white shadow-lg rounded-full p-4">
                  <img src={feature.icon} alt={feature.title} className="w-16 h-16 object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
