import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import achievements from '../../data/achievements';

const Achievements = () => {
    return (
        <section id="achievements" className="section">
            <Container>
                <SectionTitle
                    title="Achievements"
                    subtitle="Milestones and recognitions along the way"
                />
                <div className="achievements__grid">
                    {achievements.map((item) => (
                        <div className="achievement-card" key={item.id}>
                            <div className="achievement-card__icon">{item.icon}</div>
                            <div>
                                <h3 className="achievement-card__title">{item.title}</h3>
                                <p className="achievement-card__description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Achievements;
