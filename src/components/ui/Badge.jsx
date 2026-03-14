const Badge = ({ children, variant = 'default' }) => {
    const colors = {
        default: { bg: '#eff6ff', text: '#2563eb' },
        green: { bg: '#ecfdf5', text: '#059669' },
        purple: { bg: '#f5f3ff', text: '#7c3aed' },
        orange: { bg: '#fff7ed', text: '#ea580c' },
        cyan: { bg: '#ecfeff', text: '#0891b2' },
    };

    const color = colors[variant] || colors.default;

    const style = {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.8125rem',
        fontWeight: 500,
        background: color.bg,
        color: color.text,
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
    };

    return <span style={style}>{children}</span>;
};

export default Badge;
