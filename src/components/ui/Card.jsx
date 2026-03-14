const Card = ({ children, className = '', hover = true }) => {
    const style = {
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-8)',
        transition: hover ? 'transform var(--transition-base), box-shadow var(--transition-base)' : 'none',
        cursor: hover ? 'default' : 'auto',
    };

    const hoverHandlers = hover
        ? {
            onMouseEnter: (e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
            },
            onMouseLeave: (e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            },
        }
        : {};

    return (
        <div className={`card ${className}`} style={style} {...hoverHandlers}>
            {children}
        </div>
    );
};

export default Card;
