import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import education from '../../data/education';

const Education = () => {
    return (
        <section id="education" className="section">
            <Container>
                <SectionTitle
                    title="Education"
                    subtitle="My academic journey and qualifications"
                />
                <div className="education__timeline">
                    {education.map((item) => (
                        <div className="education-card" key={item.id}>
                            <span className="education-card__year">{item.year}</span>
                            <h3 className="education-card__degree">{item.degree}</h3>
                            <p className="education-card__college">{item.college}</p>
                            {item.cgpa && (
                                <p className="education-card__cgpa">
                                    {item.cgpa}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Education;
