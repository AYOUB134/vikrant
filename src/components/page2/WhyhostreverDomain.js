import chaticon from '../imgs/chaticon.PNG'
import easyregistrationicon from '../imgs/easyregistrationicon.PNG'
import protectprivacyicon from '../imgs/protectprivacyicon.PNG'

const WhyHostreverDomain = () => {
    const features = [
      {
        icon: chaticon,
        title: "24/7 live technical support",
        description:
          "Our Customer Success team is available 24/7 to support you. While we've made domain registration simple, we're always here to lend a helping hand whenever you need it. Just reach out to us - we're happy to assist!.",
      },
      {
        icon: easyregistrationicon ,
        title: "Easy Domain Registration",
        description:
          "Secure your domain name today! Registering with us is fast and hassle-free, ensuring no one else claims it before you. Lock in the perfect domain to help your brand succeed online.",
      },
      {
        icon: protectprivacyicon,
        title: "Protect Your Privacy",
        description:
          "Shield yourself from scammers and spammers with our Domain ID Protection add-on. It keeps your personal information safe by masking your publicly visible registrant contact details.",
      },
    ]
  
    return (
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Buy Domain Names at Hostrever?</h2>
            <p className="text-gray-600 max-w-1xl mx-auto">
              Hostrever provides reliable domain registration with instant activation, 24/7 live support, and complete DNS
              management
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="mb-6">
                  <img
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                    style={{
                      filter: "",
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default WhyHostreverDomain
  
  