import Image from 'next/image';
import Link from 'next/link';

export default function PhotoTwo(props) {
  const { Img, imgWidth, imgHeight } =
    props;

  return (
    <div className={'it-team-3-item text-center'}>
      <div className="it-team-3-thumb fix">
        <Image
          src={Img ? Img : '/img/team/team-3-1.jpg'}
          alt=""
          width={imgWidth ? imgWidth : 309}
          height={imgHeight ? imgHeight : 357}
          style={{ height: 'auto' }}
        />
      </div>

    </div>
  );
}
