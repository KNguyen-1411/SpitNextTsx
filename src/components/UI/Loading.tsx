import NextTopLoader from "nextjs-toploader";

export default function Loading() {
  return (
    <NextTopLoader
      showSpinner={false}
      color="linear-gradient(190deg, #6ebfcf, #FF7B89)"
      height={5}
    />
  );
}
