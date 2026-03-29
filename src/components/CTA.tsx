const CTA = () => (
  <section className="py-24 px-6" id="contact">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-medium mb-6 font-display">
        Get In Touch<br />We're happy to connect
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        Whether you have questions about admissions, courses, placements, or campus life — reach out to us. Our team is always ready to help you take the next step towards your future.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:info@ngfcet.com"
          className="inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          Email Us
        </a>
        <a
          href="tel:+918010100022"
          className="inline-flex border border-border px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-all"
        >
          Call: +91 8010100022
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
