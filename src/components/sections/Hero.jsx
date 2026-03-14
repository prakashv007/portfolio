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
                    <p className="hero__role">Aspiring Data Analyst</p>
                    <p className="hero__tagline">
                        Data analysis enthusiast with knowledge of Excel, SQL, Python, and Power BI. Comfortable working with datasets to identify trends and present insights clearly.
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
