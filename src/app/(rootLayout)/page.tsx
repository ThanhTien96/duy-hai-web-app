import { BannerSection, ProcductsSection } from '@/components/HomePage';
import { Wrapper } from '@/components/shared';
import '../../styles/homePage.scss';
import clsx from 'clsx';
import NewsSection from '@/components/HomePage/partials/NewsSection';
import ContactSection from '@/components/HomePage/partials/ContactSection';

export default async function Home() {
  const response = await fetch(`http://localhost:3000/api/home`, {
    next: {
      revalidate: 60,
    },
  });
  const data = await response.json();
  return (
    <div>
      {/* hero section */}
      <Wrapper className="!pt-2">
        <BannerSection data={data.homeData} />
      </Wrapper>
      {/* special section */}
      <div className={clsx('specialSection')}>
        <Wrapper>
          <ProcductsSection data={data.products.data} />
        </Wrapper>
      </div>
      {/* lawn mawer section */}
      <Wrapper>
        <ProcductsSection data={data.products.data} />
      </Wrapper>
      {/* news section */}
      <Wrapper>
        <NewsSection />
      </Wrapper>
      {/* contact section */}
      <div className="contact_section">
        <Wrapper>
          <ContactSection />
        </Wrapper>
      </div>
    </div>
  );
}
