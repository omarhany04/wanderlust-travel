/**
 * @param {string} selector 
 * @param {string} animationClass 
 */
export const animateOnScroll = (selector, animationClass) => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.classList.add(animationClass);
      }
    });
  };
  
  /**
   * @param {string} selector
   * @param {string} animationClass
   */
  export const setupScrollAnimations = (selector, animationClass) => {
    animateOnScroll(selector, animationClass);
    
    // Set up event listeners
    window.addEventListener('scroll', () => animateOnScroll(selector, animationClass));
    window.addEventListener('resize', () => animateOnScroll(selector, animationClass));

    return () => {
      window.removeEventListener('scroll', () => animateOnScroll(selector, animationClass));
      window.removeEventListener('resize', () => animateOnScroll(selector, animationClass));
    };
  };
  
  /**
   * @param {string} elementId 
   * @param {number} offset 
   */
  export const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };