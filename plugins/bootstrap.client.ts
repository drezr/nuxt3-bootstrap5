import {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip,
} from 'bootstrap'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      Tooltip: Tooltip,
      Popover: Popover,
      Toast: Toast,
    },

    bootstrap: {
      Alert,
      Button,
      Carousel,
      Collapse,
      Dropdown,
      Modal,
      Offcanvas,
      ScrollSpy,
      Tab,
    },
  }
})
