import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';

const highlights = [
    { icon: '📊', label: 'Data Analytics\nProjects' },
    { icon: '📈', label: 'Dashboards\nBuilt' },
    { icon: '🎓', value: '2027', label: 'Graduation\nYear' },
    { icon: '🚀', label: 'Continuous\nLearning' },
];

const About = () => {
    return (
        <section id="about" className="section section--alt">
            <Container>
                <SectionTitle
                    title="About Me"
                    subtitle="A quick look into who I am and what drives me"
                />
                <div className="about__grid">
                    <div className="about__text">
                        <p>
                            I am a <strong>B.Tech Information Technology</strong> student (2023–2027) with a strong
                            passion for Data Analytics.
                        </p>
                        <p>
                            I enjoy working with data — cleaning it, analyzing patterns, building dashboards, and
                            extracting insights that support better decision-making. I have hands-on experience using
                            <strong> Excel, SQL fundamentals, Python basics, and Power BI</strong> for data analysis
                            projects.
                        </p>
                        <p>
                            Alongside analytics, I have a technical foundation in web development, which helps me
                            understand systems and data flow more effectively.
                        </p>
                        <p>
                            My goal is to start my career as a <strong>Data Analyst by 2026</strong> and contribute to
                            data-driven decision-making in a growth-oriented organization.
                        </p>
                    </div>

                    <div className="about__highlights">
                        {highlights.map((item, index) => (
                            <div className="about__highlight-card" key={index}>
                                <div className="about__highlight-icon">{item.icon}</div>
                                {item.value && <div className="about__highlight-value">{item.value}</div>}
                                <div className="about__highlight-label" style={{ whiteSpace: 'pre-line' }}>{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
