import { useEffect, useState } from "react"

type RouteKey = "home" | "terms" | "privacy"

const normalizeHash = (hash: string): RouteKey => {
  const clean = hash.replace("#", "").toLowerCase()
  if (clean === "terms") return "terms"
  if (clean === "privacy") return "privacy"
  return "home"
}

export const useHashRoute = () => {
  const [route, setRoute] = useState<RouteKey>(() => normalizeHash(window.location.hash))

  useEffect(() => {
    const handleHash = () => setRoute(normalizeHash(window.location.hash))
    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  return { route }
}
