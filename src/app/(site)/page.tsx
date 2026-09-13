import { Faq } from '@/widgets/faq';
import { Features } from '@/widgets/features';
import { FinalCta } from '@/widgets/final-cta';
import { Hero } from '@/widgets/hero';
import { HowItWorks } from '@/widgets/how-it-works';
import { Numbers } from '@/widgets/numbers';
import { ProofStrip } from '@/widgets/proof-strip';
import { Science } from '@/widgets/science';
import { SiteFooter } from '@/widgets/site-footer';
import { SiteHeader } from '@/widgets/site-header';
import { Teachers } from '@/widgets/teachers';

const HomePage = () => (
  <>
    <SiteHeader />
    <main id="conteudo">
      <Hero />
      <ProofStrip />
      <Science />
      <HowItWorks />
      <Numbers />
      <Features />
      <Teachers />
      <FinalCta />
      <Faq />
    </main>
    <SiteFooter />
  </>
);

export default HomePage;
