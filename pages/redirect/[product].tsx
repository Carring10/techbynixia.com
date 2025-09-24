import { GetServerSideProps } from 'next';

const productLinks: Record<string, string> = {
  tagryheadphones: 'https://amzn.to/4gYRZaV',
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { product } = context.params as { product: string };

  const url = productLinks[product];

  if (!url) {
    return {
      notFound: true,
    };
  }

  return {
    redirect: {
      destination: url,
      permanent: false,
    },
  };
};

export default function RedirectPage() {
  return <p>Redirecting...</p>;
}
