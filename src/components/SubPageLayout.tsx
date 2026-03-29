import { motion } from "framer-motion";

interface SubPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const SubPageLayout = ({ title, subtitle, children }: SubPageLayoutProps) => (
  <div>
    {/* Hero Banner */}
    <section className="relative bg-foreground text-background py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold font-display mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-background/70 text-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>

    {/* Content */}
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  </div>
);

export default SubPageLayout;
