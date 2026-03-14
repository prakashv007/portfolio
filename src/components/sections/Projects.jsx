import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import projects from '../../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <Container>
                <SectionTitle
                    title="My Projects"
                    subtitle=""
                />
                <div className="projects__grid">
                    {projects.map((project) => (
                        <div className="proj-card" key={project.id}>
                            {/* Thumbnail */}
                            <div className="proj-card__thumb" style={project.thumbBg ? { background: project.thumbBg } : {}}>
                                {project.image
                                    ? <img src={project.image} alt={project.title} className="proj-card__img" />
                                    : <div className="proj-card__placeholder">{project.placeholderLabel || project.title}</div>
                                }
                            </div>

                            {/* Body */}
                            <div className="proj-card__body">
                                {project.badge && (
                                    <span className="proj-card__badge">{project.badge}</span>
                                )}
                                <h3 className="proj-card__title">{project.title}</h3>
                                <p className="proj-card__desc">{project.description}</p>

                                {project.tools && project.tools.length > 0 && (
                                    <div className="proj-card__tools">
                                        <span className="proj-card__tools-label">Tools: </span>
                                        {project.tools.join(', ')}
                                    </div>
                                )}

                                {/* Buttons */}
                                <div className="proj-card__actions">
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            className="proj-card__btn"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {project.githubLabel || 'Code'}
                                        </a>
                                    )}
                                    {project.links.live && (
                                        <a
                                            href={project.links.live}
                                            className="proj-card__btn"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Projects;
