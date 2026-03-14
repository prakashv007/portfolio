const Container = ({ children, className = '' }) => {
    const style = {
        width: '100%',
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        padding: '0 1.5rem',
    };

    return (
        <div className={`container ${className}`} style={style}>
            {children}
        </div>
    );
};

export default Container;
