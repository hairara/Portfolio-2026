import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)

app.directive('reveal', {
  mounted(el, binding) {
    const config = binding.value && typeof binding.value === 'object'
      ? binding.value
      : { delay: typeof binding.value === 'number' ? binding.value : 0 }

    const delay = config.delay ?? 0

    if (config.clip) {
      el.style.transform = 'translateY(105%)'
      el.style.willChange = 'transform'
      el.style.transition = `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
    } else if (config.scale) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(36px) scale(0.97)'
      el.style.willChange = 'transform, opacity'
      el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
    } else {
      el.style.opacity = '0'
      el.style.transform = 'translateY(32px)'
      el.style.willChange = 'transform, opacity'
      el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
    }

    const reveal = () => {
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.style.willChange = 'auto'
    }

    // clip mode: the element is translated 105% outside its overflow-hidden parent,
    // so the browser clips it to 0px visible — IO never fires on the element itself.
    // Observe the parent wrapper instead so IO triggers when the container enters view.
    const observeTarget = config.clip ? (el.parentElement || el) : el

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.disconnect()
        }
      },
      { threshold: 0.01 }
    )
    observer.observe(observeTarget)
  },
})

app.mount('#app')
