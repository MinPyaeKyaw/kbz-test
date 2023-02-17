import react from 'react';
import { useLocation } from "react-router-dom"

const useCurrentPath = () => {

    const location = useLocation();
    
    const currentPath:string = location.pathname;

    function isCurrentPath(pathname:string):boolean {
        return location.pathname === pathname;
    }

    return {isCurrentPath, currentPath};
}

export default useCurrentPath;