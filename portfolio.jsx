import React, { useState } from 'react';
import { Menu, ExternalLink, ChevronRight, MessageSquare } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "AI Chatbot with Enhanced UI",
      description: "Developed a chatbot with a branch-based conversation design for improved user experience. Integrated web scraping capabilities similar to Perplexity.",
      tech: ["Python", "AI/ML", "Web Scraping"],
      status: "In Progress"
    },
    {
      title: "API Development & Integration",
      description: "Built and implemented various APIs, demonstrating strong backend development skills.",
      tech: ["REST APIs", "Flask", "Python"],
      status: "Completed"
    },
    {
      title: "Web Scraper",
      description: "Created a web scraper to collect and process online information for chatbot enhancement.",
      tech: ["Python", "BeautifulSoup", "Data Processing"],
      status: "Completed"
    },
    {
      title: "Enclop.com Deployment",
      description: "Successfully deployed website on Azure cloud platform with custom domain configuration.",
      tech: ["Azure", "Cloud Deployment", "Domain Management"],
      status: "Live"
    }
  ];

  const skills = [
    { name: "Python Development", icon: <MessageSquare className="w-6 h-6" /> },
    { name: "Web Development", icon: <ExternalLink className="w-6 h-6" /> },
    { name: "Cloud Computing", icon: <MessageSquare className="w-6 h-6" /> },
    { name: "Digital Marketing", icon: <ExternalLink className="w-6 h-6" /> },
    { name: "API Development", icon: <MessageSquare className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Krishna Soni</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Krishna Soni</h1>
            <p className="text-xl md:text-2xl mb-8">Computer Science Student & Developer</p>
            <p className="text-lg">Sage University, Indore</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed">
              I'm a BTech Computer Science student at Sage University, Indore, passionate about building innovative solutions 
              using modern technologies. My expertise spans across Python development, web technologies, cloud computing, 
              and digital marketing. I love creating practical applications that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
                {skill.icon}
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${
                    project.status === "Completed" ? "text-green-600" : 
                    project.status === "Live" ? "text-blue-600" : "text-yellow-600"
                  }`}>
                    {project.status}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <a href="mailto:krishna105@gmail.com" className="text-gray-700 hover:text-blue-600">
                  krishna105@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <a href="tel:+917415618704" className="text-gray-700 hover:text-blue-600">
                  +91 7415618704
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <ExternalLink className="w-6 h-6 text-blue-600" />
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Krishna Soni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;