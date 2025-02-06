const PerformanceCard = ({ iconUrl, title, description }) => {
  return (
    <div className="bg-[#0c1655] rounded-lg p-6 relative">
      <div className="ml-16 text-white">
        <div className="flex items-center mb-3"> 
          <img src={iconUrl || "/placeholder.svg"} alt={title} className="w-8 h-8 mr-3" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

const PerformanceSection = () => {
  const performanceItems = [
    {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/2150/2150463.png",
      title: "Global Data Centers",
      description: "We utilize global servers to ensure optimal performance and minimal latency for users worldwide.",
    },
    {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/1067/1067566.png",
      title: "Advanced Control Panel",
      description: "Manage your hosting with our intuitive control panel designed for both beginners and experts.",
    },
    {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/8422/8422475.png",
      title: "Daily Offsite Backups",
      description: "Your data is automatically backed up daily to ensure your peace of mind.",
    },
  ]

  return (
    <section className="py-16 bg-[#09113f]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Speed. Dependability. Performance.
        </h2>
    
        <p className="  text-center text-white mb-8">
          Speed. Dependability. Performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {performanceItems.map((item, index) => (
            <PerformanceCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerformanceSection;
