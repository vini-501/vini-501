import { Github, Linkedin, Mail, Globe, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function PortfolioReadme() {
  const githubUsername = "vini-501"
  const [greeting, setGreeting] = useState("Hi, I'm Vini")

  useEffect(() => {
    const greetings = [
      "Hi, I'm Vini 👋",
      "Hello World! I'm Vini 🌍",
      "Namaste! I'm Vini 🙏",
      "Bonjour! I'm Vini",
      "Ciao! I'm Vini",
    ]
    let index = 0
    const intervalId = setInterval(() => {
      setGreeting(greetings[index])
      index = (index + 1) % greetings.length
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-2 transition-all duration-500 ease-in-out transform hover:scale-105">
            {greeting}
          </h1>
          <p className="text-xl text-gray-600 mb-4">Data Science Enthusiast | MachineLearning Practitioner</p>
          <hr className="border-t border-gray-300 mb-6" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p>
              Hi, I'm Vinay Kumar, a data-driven problem solver passionate about transforming raw data into actionable insights.
             I leverage analytical tools and techniques to uncover trends, optimize processes, and drive informed decision-making.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🌐 Languages & Technologies</h2>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-50 rounded-full px-3 py-2 transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  <Image
                    src={lang.icon || "/placeholder.svg"}
                    alt={lang.name}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-600">{lang.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="space-y-4">
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=${vini-501}&show_icons=true&theme=radical`}
                alt="GitHub Stats"
                width={495}
                height={195}
              />
              <Image
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${vini-501}&theme=radical`}
                alt="GitHub Streak"
                width={495}
                height={195}
              />
              <Image
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${vini-501}&layout=compact&theme=radical`}
                alt="Most Used Languages"
                width={495}
                height={195}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">📫 Contact Me</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`https://github.com/${githubUsername}`}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/vinay-kumar-694186293"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:svinaykumar501@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </Link>
              <Link
                href="https://devfolio.co/@vini501"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.75 5.25v3h3v-3h-3zm-7.5 6h3v-3h-3v3zm0 1.5v3h3v-3h-3zm12 0v3h3v-3h-3zm-6 0v3h3v-3h-3zm-6 6h3v-3h-3v3zm12 0h3v-3h-3v3zm-6 0h3v-3h-3v3z" />
                </svg>
              </Link>
              <Link
                href="https://wa.me/9380383057"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <Phone className="w-6 h-6" />
              </Link>
              <Link
                href="https://yourwebsite.com"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <Globe className="w-6 h-6" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

const languages = [
  { name: "C/C++", icon: "/icons/cpp.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "HTML", icon: "/icons/html5.svg" },
  { name: "CSS", icon: "/icons/css3.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "SQL", icon: "/icons/sql.svg" },
]

