import { ref } from 'vue';

export function useToggleVisibility(targetClass: string) {
  const isVisible = ref(false);
  
  const toggleVisibility = () => {
    const elements = document.querySelectorAll<HTMLElement>(`.${targetClass}`);
    elements.forEach(el => {
      if (isVisible.value) { 
        el.classList.remove('highlight');
      } else {
        el.classList.add('highlight');
      }
    });

    isVisible.value = !isVisible.value;
  };

  return {
    toggleVisibility,
    isVisible,}
}