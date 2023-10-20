import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from './routes';

function App() {
    return (
        <Router>
            <div className="ApplicationWrapper">
                <Routes>
                    {publicRoute.map((singleRoute, idx) => {
                        const RenderedComponent = singleRoute.component;

                        return (
                            <Route
                                key={idx}
                                path={singleRoute.path}
                                element={
                                    <Layout>
                                        <RenderedComponent />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}


export default App;

