import React from 'react';

import { Buttons, Container, Heading } from './styles';

interface Props {
    label: string
    descriptio: string
}

const DefaultOverlayContent: React.FC <Props>= ({
    label, descriptio
}) => {
    return (
        <Container>
            <Heading>
            <h1>{label}</h1>
            <h2>{ descriptio}</h2>
            </Heading>

            <Buttons>
                <button>
                    Custom Order
                </button>
                <button>
                    Exisying Inventory
                </button>
            </Buttons>
        </Container>
    );
};

export default DefaultOverlayContent;