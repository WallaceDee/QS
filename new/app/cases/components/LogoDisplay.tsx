"use client"

type Props = {
  logo: string | null
}

export function LogoDisplay({ logo }: Props) {
  if (!logo) return <span className="text-xl">?</span>

  const isImage = logo.startsWith("/") || logo.startsWith("http")

  if (!isImage) return <span className="text-xl">{logo}</span>

  return (
    <img
      src={logo}
      alt=""
      className="w-full h-full object-contain rounded"
      onError={(e) => {
        const img = e.target as HTMLImageElement
        img.style.display = "none"
        if (img.parentElement) img.parentElement.textContent = "?"
      }}
    />
  )
}
