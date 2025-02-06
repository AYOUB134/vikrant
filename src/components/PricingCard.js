import hostingicon from './imgs/updatedicon.png'
const FeatureIcon = ({ type }) => {
    // Different icons based on feature type
    const icons = {
      storage: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 12H2M22 12a10 10 0 01-10 10M22 12a10 10 0 00-10-10M2 12a10 10 0 0110-10M2 12a10 10 0 0010 10m-10-10v24" />
        </svg>
      ),
      bandwidth: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      websites: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      email: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      database: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 3c4.97 0 9 2.239 9 5s-4.03 5-9 5-9-2.239-9-5 4.03-5 9-5z" />
          <path d="M3 8v8c0 2.761 4.03 5 9 5s9-2.239 9-5V8" />
        </svg>
      ),
      cpanel: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      ),
      support: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18.364 5.636a9 9 0 010 12.728m0 0l3.536-3.536M18.364 5.636l3.536-3.536M5.636 18.364a9 9 0 010-12.728m0 0L2.1 2.1M5.636 18.364L2.1 21.9" />
        </svg>
      ),
      uptime: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    }
  
    return icons[type] || null
  }
  
  const FeatureItem = ({ icon, text, value }) => (
    <div className="flex items-center gap-3 py-2 border-b border-gray-200 last:border-0">
      <div className="text-gray-600">
        <FeatureIcon type={icon} />
      </div>
      <span className="text-[15px] text-gray-700">
        <strong className="font-medium">{value}</strong> {text}
      </span>
    </div>
  )
  
  const PricingCard = ({ title, price, description, features }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
      <div className="text-center mb-6">
        <img
          src={hostingicon}
          alt={title}
          className="w-24 h-24 mx-auto mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">From only</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-xl text-gray-500">$</span>
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-gray-500">/mo</span>
        </div>
        <p className="text-sm text-gray-500">ex VAT</p>
      </div>
  
      <p className="text-sm text-gray-600 text-center mb-6">{description}</p>
  
      <div className="flex-grow space-y-1">
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} text={feature.text} value={feature.value} />
        ))}
      </div>
  
      <button className="w-full bg-[#E41E26] text-white py-3 rounded mt-6 hover:bg-red-700 transition-colors font-medium">
        Order Now
      </button>
    </div>
  )
  
  const PricingSection = () => {
    const plans = [
      {
        title: "Premium Web Hosting",
        price: "3.29",
        description: "High performance, low cost hosting with SSD for the perfect starter plan.",
        features: [
          { icon: "storage", value: "10GB", text: "SSD Storage" },
          { icon: "bandwidth", value: "Unmetered", text: "Bandwidth" },
          { icon: "websites", value: "Host 2", text: "Websites" },
          { icon: "email", value: "Unlimited", text: "Emails" },
          { icon: "database", value: "Unlimited", text: "Databases" },
          { icon: "cpanel", value: "cPanel", text: "Control Panel" },
          { icon: "support", value: "24x7", text: "Technical Support" },
          { icon: "uptime", value: "99.9%", text: "Uptime SLA" },
        ],
      },
      {
        title: "WordPress Hosting",
        price: "4.79",
        description: "Our best selling plan, perfect for dynamic database driven sites such as WordPress.",
        features: [
          { icon: "storage", value: "15GB", text: "SSD Storage" },
          { icon: "bandwidth", value: "Unmetered", text: "Bandwidth" },
          { icon: "websites", value: "Host 5", text: "Websites" },
          { icon: "email", value: "Unlimited", text: "Emails" },
          { icon: "database", value: "Unlimited", text: "Databases" },
          { icon: "cpanel", value: "cPanel", text: "Control Panel" },
          { icon: "support", value: "24x7", text: "Technical Support" },
          { icon: "uptime", value: "99.9%", text: "Uptime SLA" },
        ],
      },
      {
        title: "Managed VPS Servers",
        price: "15.54",
        description: "Extra SSD storage and 15 sites, great for developers & individuals that require advanced hosting.",
        features: [
          { icon: "storage", value: "25GB", text: "SSD Storage" },
          { icon: "bandwidth", value: "Unmetered", text: "Bandwidth" },
          { icon: "websites", value: "Host 15", text: "Websites" },
          { icon: "email", value: "Unlimited", text: "Emails" },
          { icon: "database", value: "Unlimited", text: "Databases" },
          { icon: "cpanel", value: "cPanel", text: "Control Panel" },
          { icon: "support", value: "24x7", text: "Technical Support" },
          { icon: "uptime", value: "99.9%", text: "Uptime SLA" },
        ],
      },
      {
        title: "Dedicated servers",
        price: "74.55",
        description: "With Unlimited websites this shared hosting plan is designed for developers and power users.",
        features: [
          { icon: "storage", value: "40GB", text: "SSD Storage" },
          { icon: "bandwidth", value: "Unmetered", text: "Bandwidth" },
          { icon: "websites", value: "Host Unlimited", text: "Websites" },
          { icon: "email", value: "Unlimited", text: "Emails" },
          { icon: "database", value: "Unlimited", text: "Databases" },
          { icon: "cpanel", value: "cPanel", text: "Control Panel" },
          { icon: "support", value: "24x7", text: "Technical Support" },
          { icon: "uptime", value: "99.9%", text: "Uptime SLA" },
        ],
      },
    ]
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default PricingSection
  
  