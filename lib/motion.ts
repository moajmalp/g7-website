/**
 * G7 Motion Configuration
 * Vibe: Disciplined, Steady, Algorithmic.
 */

export const G7_EASE = [0.25, 0.1, 0.25, 1.0];

export const dataFlowReveal = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: G7_EASE
        }
    }
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const pulseAnimation = {
    opacity: [1, 0.8, 1],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

export const G7_ANIMATIONS = {
    fadeInUp: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: G7_EASE }
    },
    stagger: {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    },
    pulse: {
        animate: {
            opacity: [1, 0.8, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }
};
