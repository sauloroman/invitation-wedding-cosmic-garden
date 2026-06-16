import React, { createContext, useContext, useState } from 'react'
import './_accordion.scss'

interface AccordionContextType {
    openId: string | null;
    toggleItem: (id: string) => void;
    allowMultiple: boolean;
    activeItems: Set<string>;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

interface AccordionProps {
    children: React.ReactNode;
    allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ children, allowMultiple = false }) => {
    const [openId, setOpenId] = useState<string | null>(null);
    const [activeItems, setActiveItems] = useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
        if (allowMultiple) {
            setActiveItems(prev => {
                const next = new Set(prev);
                if (next.has(id)) {
                    next.delete(id);
                } else {
                    next.add(id);
                }
                return next;
            });
        } else {
            setOpenId(prev => (prev === id ? null : id));
        }
    };

    return (
        <AccordionContext.Provider value={{ openId, toggleItem, allowMultiple, activeItems }}>
            <div className="accordion">
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

interface AccordionItemProps {
    id: string;
    title: React.ReactNode;
    children: React.ReactNode;
    classNameButton?: string;
    icon?: React.ReactNode
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, children, classNameButton, icon }) => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error('AccordionItem must be used within an Accordion');
    }

    const { openId, toggleItem, allowMultiple, activeItems } = context;
    const isOpen = allowMultiple ? activeItems.has(id) : openId === id;

    return (
        <div className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}>
            <button
                className={`accordion__header ${classNameButton}`}
                onClick={() => toggleItem(id)}
                aria-expanded={isOpen}
            >
                <div className="accordion__header-content">
                    {icon && <div className="accordion__header-icon">{icon}</div>}
                    <span className="accordion__title">{title}</span>
                </div>
                <span className="accordion__icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                </span>
            </button>
            <div className="accordion__content-wrapper">
                <div className="accordion__content">
                    <div className="accordion__content-inner">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
