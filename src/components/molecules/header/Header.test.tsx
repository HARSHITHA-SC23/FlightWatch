import { render, screen } from '@testing-library/react';
import React from 'react'
import Header from './Header';


describe('Header Component', () => {
    const title = 'Header'
    const links = [
        { name: 'Home', url: '/' },
        { name: 'Flight View', url: '/flight-view' }
      ];

    test('renders header title', () => {
        render(<Header title={title} links={links}/>)
        const titleElement = screen.getByText(title)
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveClass('headerTitle')
    })

    test('renders correct number of links',() => {
        render(<Header title={title} links={links}/>)

        const linkElements = screen.getAllByRole('link')
        expect(linkElements).toHaveLength(links.length)
    })

    test('render each link with correct name and url', () => {
        render(<Header title={title} links={links}/>)

        links.forEach((link) => {
            const linkElement = screen.getByText(link.name)
            expect(linkElement).toBeInTheDocument()
            expect(linkElement).toHaveAttribute('href', `${window.location.origin}${link.url}`)
            expect(linkElement).toHaveClass('headerAnchor')
        })
    })
})