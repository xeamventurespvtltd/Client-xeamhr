import { useEffect, useState, useRef } from "react"
function useSticky(callBack) {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      try {
        window.scrollY > element.current.getBoundingClientRect().bottom
          ? setSticky(true)
          : setSticky(false)
      }
      catch (err) {
      }
    }
    let time = setTimeout(window.addEventListener("scroll", handleScroll), 1000)
    return () => {
      clearInterval(time)
    }
  }, [isSticky])
  return { isSticky, element }
}


export default useSticky