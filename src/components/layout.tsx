import { PropsWithChildren } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Header from './header'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-gradient-to-br from-background to-muted min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8 sm:py-10">
                <div className="container mx-auto px-4 text-center space-y-6 sm:space-y-8">
                    <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                        Made with ❤️ by Soumojit Banerjee
                    </p>
                    <div className="flex justify-center space-x-6 sm:space-x-10">
                        <a
                            href="https://github.com/soumojit622"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/soumojit-banerjee-4914b3228/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
                        >
                            <FaTwitter size={24} />
                        </a>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-4">
                        © {new Date().getFullYear()} Soumojit Banerjee. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
