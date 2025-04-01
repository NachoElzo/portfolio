import React from 'react';

export default function Home() {
    return (
        <div className="container">
            <header className="header">
                <h1>🚀 My Retro Portfolio</h1>
            </header>
            <section className="intro">
              <p>Welcome to my digital space! I love creating smart solutions that work well and make things easier. Over the years, I’ve improved my skills in automation, helping me save time, reduce mistakes, and get better results.</p>
              <p>Quality is very important to me. It’s not just about writing good code, but also about making sure the final product is reliable and works smoothly.</p>
              <p>When I work on a project, I think about how everything fits together—the code, the system, and the user experience. I focus on making things simple, fast, and effective, whether it’s building secure apps or designing complex solutions.</p>
          </section>

            <section className="projects">
                <h2>🎮 My Projects</h2>
                <ul>
                    <li><a href="#" className="link">🔗 Security Scanner</a> - A tool to detect vulnerabilities.</li>
                </ul>
            </section>

            <section className="contact">
                <h2>📬 Contact Me</h2>
                <p>Email: <a href="mailto:youremail@example.com" className="link">youremail@example.com</a></p>
                <p>GitHub: <a href="https://github.com/yourgithub" target="_blank" className="link">yourgithub</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="link">yourlinkedin</a></p>
                <p>Download My Resume: <a href="/path-to-your-resume.pdf" className="link" download>Click here to download</a></p>
            </section>

            <section className="technologies">
                <h2>💻 Technologies I&apos;ve Used</h2>
                <h3>Automation:</h3>
                <ul>
                    <li>Playwright</li>
                    <li>Cypress</li>
                    <li>WebDriverIO</li>
                </ul>

                <h3>Programming Languages:</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>SQL</li>
                </ul>
            </section>

            <section className="tetrisBoard">
                <div className="block blue"></div>
                <div className="block red"></div>
                <div className="block green"></div>
                <div className="block yellow"></div>
            </section>

            <footer className="footer">
                <p>© 2025 - Made with ❤️ for tech.</p>
            </footer>
        </div>
    );
}
