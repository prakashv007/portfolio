import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import certificates from '../../data/certificates';

const Certificates = () => {
    return (
        <section id="certificates" className="section section--alt">
            <Container>
                <SectionTitle
                    title="Certificates"
                    subtitle="Professional certifications and technical recognitions"
                />
                <div className="certificates__grid">
                    {certificates.map((cert) => (
                        <div className="cert-card" key={cert.id}>
                            <div className="cert-card__image">
                                <img src={cert.image} alt={cert.title} />
                            </div>
                            <div className="cert-card__body">
                                <h3 className="cert-card__title">{cert.title}</h3>
                                <p className="cert-card__issuer">{cert.issuer}</p>
                                <p className="cert-card__description">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Certificates;
