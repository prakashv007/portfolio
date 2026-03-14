import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import skills from '../../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="section section--alt">
            <Container>
                <SectionTitle
                    title="Skills"
                    subtitle="Technologies and tools I work with"
                />
                <div className="skills__grid">
                    {skills.map((category) => (
                        <div className="skills__card" key={category.category}>
                            <h3 className="skills__card-title">{category.category}</h3>
                            <ul className="skills__item-list">
                                {category.items.map((skill, idx) => (
                                    <li key={skill} className="skills__item">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Skills;
