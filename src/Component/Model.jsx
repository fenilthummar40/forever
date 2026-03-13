import React from 'react';

const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modalContent} className="dark:!bg-darkMode">
                <button onClick={onClose} style={styles.closeButton} className="dark:text-light">&times;</button>
                {children}
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '500px',
        zIndex: 1001,
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '24px',
        cursor: 'pointer',
        border: 'none',
        background: 'none',
    },
};

export default Modal;
