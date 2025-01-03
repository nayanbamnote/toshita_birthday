import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  title?: string
  id?: string
}

export function SectionWrapper({ children, className, title, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative min-h-screen w-full py-16", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-4xl font-bold text-white text-center mb-12">{title}</h2>
        )}
        {children}
      </div>
    </section>
  )
} 