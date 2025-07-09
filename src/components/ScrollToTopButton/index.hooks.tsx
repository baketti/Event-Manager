import { 
    useState, 
    useEffect, 
    useRef,
    useCallback
 } from 'react';

export const useScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    const scrollToTop = useCallback(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },[]);
  
    const toggleVisibility = useCallback(() => {
        if (window.scrollY > window.innerHeight) {
          setIsVisible(true);
          if(buttonRef.current){
              buttonRef.current.onclick = () => scrollToTop();
          }
        } else {
          setIsVisible(false);
        }
      },[scrollToTop]);
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, [toggleVisibility]);
    
    return {
        isVisible,
        buttonRef
    }
}