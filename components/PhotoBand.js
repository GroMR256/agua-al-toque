import Image from 'next/image';

export default function PhotoBand() {
  return (
    <figure className="photo-band" data-ink="light" data-scroll-scale>
      <Image
        src="/images/huarmey-vista.jpg"
        alt="Vista aérea de Huarmey: la ciudad, el cauce del río Huarmey y el puente de la Panamericana Norte con camiones cruzando"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
      <figcaption className="photo-caption">
        Huarmey desde el aire: la ciudad, el río y la Panamericana Norte.
      </figcaption>
    </figure>
  );
}
