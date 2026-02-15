import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'

const projectsPage = () => {
    return (
        <div>
            <Navigation />
            <Projects showButton={false} />
            <Footer />
        </div>
    )
}

export default projectsPage
