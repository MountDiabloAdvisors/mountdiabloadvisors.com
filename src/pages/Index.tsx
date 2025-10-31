import logoImage from "@/assets/logo.png";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-8 sm:py-12">
      <header className="w-full max-w-4xl mb-8 sm:mb-12">
        <img 
          src={logoImage} 
          alt="Mount Diablo Advisors - Boutique advisory service specializing in technology and FinTech"
          className="w-full max-w-2xl mx-auto"
        />
      </header>

      <main className="w-full max-w-4xl">
        <div className="mb-8 sm:mb-12">
          <img 
            src={heroImage} 
            alt="Mount Diablo landscape - golden hills of California"
            className="w-full h-auto rounded-sm shadow-lg"
          />
        </div>

        <section className="text-center space-y-6 sm:space-y-8 px-4">
          <p className="text-foreground text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Mount Diablo Advisors is a boutique advisory service specializing in technology and FinTech. 
            From blockchain to equity options trading, we help entrepreneurs refine their ideas, market 
            and finance them, and solve their difficult problems.
          </p>

          <p className="text-muted-foreground text-base sm:text-lg">
            For inquiries, please send email to{" "}
            <a 
              href="mailto:info@mountdiabloadvisors.com"
              className="text-primary hover:text-accent transition-colors underline"
            >
              info@mountdiabloadvisors.com
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="mt-auto pt-12 pb-4">
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} Mount Diablo Advisors
        </p>
      </footer>
    </div>
  );
};

export default Index;
