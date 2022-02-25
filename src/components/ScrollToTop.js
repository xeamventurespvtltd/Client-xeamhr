import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const path = window.location.pathname;
        //console.log("CLASSNAME: ", window.location.pathname);
        if(path === '/' || path === '/contact-us' || path === '/book-a-demo'){
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}