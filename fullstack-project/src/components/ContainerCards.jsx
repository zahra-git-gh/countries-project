import { Card } from "./Card";

export function ContainerCards() {
  return (
    <section className="w-full flex flex-wrap justify-center sm:justify-between gap-x-8 gap-y-1">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}
