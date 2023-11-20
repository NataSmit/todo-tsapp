import React from 'react'
import Root from './components/Root/Root'
import Layout from './components/Layout/Layout'
import Main from './pages/Main'

function App () {
    return (
        <div className="App">
            <Root>
                <Layout>
                    <Main />
                </Layout>  
            </Root>
        </div>
    )
}

export default App
