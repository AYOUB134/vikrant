import ssl from './imgs/ssl.PNG'
import driver from './imgs/drivers.PNG'
import gurantee from './imgs/gurantee.PNG'
import bandwidth from './imgs/bandwidth.PNG'

const FeatureCard = () => {
  const features = [
    {
      icon: <img src={bandwidth} alt="SSL Icon" className="w-20 h-20" />
      ,
      title: "Unmetered bandwidth",
      description: "Enjoy unlimited bandwidth for your website – no caps or restrictions with our unmetered plans.",
    },
    {
      icon: <img src={driver} alt="SSL Icon" className="w-20 h-20" />
      ,
      title: "Solid State Drives (SSDs)",
      description:
        "Experience faster website performance, improved caching, and quicker database queries with SSDs (up to 200% faster than HDDs)",
    },
    {
      icon: <img src={gurantee} alt="SSL Icon" className="w-20 h-20" />,

      title: "99.9% uptime guarantee",
      description:
        "In addition to our technical expertise, we also offer a 99.9% uptime guarantee – so you can have peace of mind knowing that your website will be available to your users whenever they need it",
    },
    {
        icon: <img src={ssl} alt="SSL Icon" className="w-20 h-20" />
      ,
      title: "Free SSL certificate",
      description:
        "All of our hosting plans come with a free SSL certificate – protect your website and its visitors with this essential security feature.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-6">
              <div className="flex justify-center items-center mb-6">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 text-red-600">{feature.icon}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCard
