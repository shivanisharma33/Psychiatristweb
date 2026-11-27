import { Seo } from '@/components/common/Seo';
import { Button } from '@/components/common/Button';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you were looking for could not be found." />
      <section className="bg-peach-animated">
        <div className="mx-auto flex min-h-[60vh] max-w-[720px] flex-col items-center justify-center px-[20px] py-[100px] text-center">
          <p className="text-[28px] text-kicker">404</p>
          <h1 className="mt-[19px] font-serif text-[56px] leading-[64px] tracking-[-0.02em] text-ink max-md:text-[40px] max-md:leading-[48px]">
            This page doesn&apos;t exist
          </h1>
          <Button to="/" className="mt-[40px]">
            Back to home
          </Button>
        </div>
      </section>
    </>
  );
}
