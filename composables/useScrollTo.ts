export function useScrollTo() {
    const scrollTo = (id: string, smooth: boolean = true) => {
        if (!id) return

        const el = document.getElementById(id)
        if (el) {
        el.scrollIntoView({
            behavior: smooth ? 'smooth' : 'auto',
            block: 'start'
        })
        }
    }

  return { scrollTo }
}