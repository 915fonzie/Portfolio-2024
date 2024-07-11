import React from 'react'

export default function useCheckVisibility(ref) {
    
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect()
            const {innerHeight} = window
            const isVisible = (
              rect.top <= 0.5 + (innerHeight / 2) &&
              rect.left >= 0 &&
              rect.bottom >= 1 + (innerHeight / 2)
            );
            setIsVisible(isVisible)
          }
        };
    
        window.addEventListener('scroll', handleScroll)
        // Initial check on component mount
        handleScroll()
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return isVisible
}