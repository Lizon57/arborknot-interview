import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ROUTES } from "./routes/user-routes"


export const App = () => {
    return (
        <Router>
            <Routes>
                {ROUTES.map(route => <Route
                    key={route.id}
                    path={route.path}
                    element={<route.element />} />)}
            </Routes>
        </Router>
    )
}