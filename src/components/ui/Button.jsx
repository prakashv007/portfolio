const Button = ({ children, variant = 'primary', href, onClick, icon, className = '' }) => {
    const baseClass = 'btn';
    const variantClass = `btn--${variant}`;

    const style = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: variant === 'ghost' ? '0.5rem 0' : '0.75rem 1.75rem',
        borderRadius: variant === 'ghost' ? '0' : '0.5rem',
        fontSize: '0.9375rem',
        fontWeight: 600,
        letterSpacing: '0.01em',
        cursor: 'pointer',
        transition: 'all 250ms ease',
        textDecoration: 'none',
        border: variant === 'outline' ? '2px solid #2563eb' : 'none',
        background: variant === 'primary'
            ? 'linear-gradient(135deg, #2563eb, #1d4ed8)'
            : variant === 'outline'
                ? 'transparent'
                : 'transparent',
        color: variant === 'primary'
            ? '#ffffff'
            : '#2563eb',
        boxShadow: variant === 'primary'
            ? '0 4px 14px rgba(37, 99, 235, 0.3)'
            : 'none',
    };

    const hoverHandlers = {
        onMouseEnter: (e) => {
            if (variant === 'primary') {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
            } else if (variant === 'outline') {
                e.currentTarget.style.background = '#2563eb';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
            } else {
                e.currentTarget.style.color = '#1d4ed8';
            }
        },
        onMouseLeave: (e) => {
            if (variant === 'primary') {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 99, 235, 0.3)';
            } else if (variant === 'outline') {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#2563eb';
                e.currentTarget.style.transform = 'translateY(0)';
            } else {
                e.currentTarget.style.color = '#2563eb';
            }
        },
    };

    if (href) {
        return (
            <a
                href={href}
                className={`${baseClass} ${variantClass} ${className}`}
                style={style}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                {...hoverHandlers}
            >
                {icon && <span className="btn__icon">{icon}</span>}
                {children}
            </a>
        );
    }

    return (
        <button
            className={`${baseClass} ${variantClass} ${className}`}
            style={style}
            onClick={onClick}
            {...hoverHandlers}
        >
            {icon && <span className="btn__icon">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
