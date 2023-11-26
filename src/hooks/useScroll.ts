import { useEffect, useState } from 'react';

const useScroll = ()=> {
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {

        const handleScroll = () => {
            setHeight(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);

    return [height] as const;
}

export default useScroll;