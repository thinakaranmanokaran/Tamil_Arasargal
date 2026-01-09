import React, { useEffect, useState } from "react";
import { Home } from "./pages";
import Loader from "./components/Loader";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000); // loader duration (ms)

        return () => clearTimeout(timer);
    }, []);

    return loading ? <Loader /> : <Home />;
};

export default App;
