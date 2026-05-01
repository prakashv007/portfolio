import Container from '../layout/Container';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            {/* Background orbs */}
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />

            <Container>
                <div className="hero__content">
                    <p className="hero__greeting">Hello, I'm</p>
                    <h1 className="hero__name">
                        Prakash V<span>.</span>
                    </h1>
                    <h2 className="hero__role">Data Analyst & IT Student</h2>
                    <p className="hero__tagline">
                        Transforming complex datasets into actionable business insights. Proficient in Python, SQL, and BI tools, with a focus on data storytelling and impactful visualizations.
                    </p>
                    <div className="hero__actions">
                        <Button variant="outline" href="#projects">
                            View Projects
                        </Button>
                        <Button variant="primary" href="/assets/resume.pdf" target="_blank">
                            Download Resume
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
