import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test( 'renders welcome heading', () =>
{
    render( <App /> );
    const linkElement = screen.getByText( /Hi, I'm John./i );
    expect( linkElement ).toBeInTheDocument();
} );