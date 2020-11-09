import React from 'react';

import { Container } from './styles';

interface Props {
    modelName: string
    overlayNode: React.ReactNode
}

const ModelSection: React.FC = ({
    modelName,
    overlayNode,
    children,
    ...props
}) => {
    return(
        <Container {..props}>
            <h1>ModelSection</h1>
        </Container>
    );
};

export default ModelSection;