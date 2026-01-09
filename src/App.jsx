import React, { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));

const App = () => (
    <Suspense fallback={<Loader />}>
        <Home />
    </Suspense>
);

export default App;
