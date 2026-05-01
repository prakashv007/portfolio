import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import internships from '../../data/internships';

const Internships = () => {
    return (
        <section id="internships" className="section">
            <Container>
                <SectionTitle
                    title="Experience"
                    subtitle="Industry exposure and professional internships"
                />
                <div className="internships__list">
                    {internships.map((intern) => (
                        <div className="internship-card" key={intern.id}>
                            <div className="internship-card__indicator" />
                            <div className="internship-card__content">
                                <div className="internship-card__main">
                                    <div className="internship-card__header">
                                        <h3 className="internship-card__company">{intern.company}</h3>
                                        <span className="internship-card__duration">{intern.duration}</span>
                                    </div>
                                    <p className="internship-card__role">{intern.role}</p>
                                    <ul className="internship-card__responsibilities">
                                        {intern.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>
                                    <p
                                        style={{
                                            marginTop: 'var(--space-4)',
                                            fontSize: 'var(--font-size-sm)',
                                            color: 'var(--color-text-muted)',
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        💡 {intern.learnings}
                                    </p>
                                </div>
                                {intern.image && (
                                    <div className="internship-card__proof">
                                        <img src={intern.image} alt={`${intern.company} Internship Proof`} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Internships;
