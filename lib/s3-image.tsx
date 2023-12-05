import Image from 'next/image'
import { s3 } from '@/lib/s3-client'


export default function S3Image(
  { s3Key, width, height, alt = '' }: { s3Key: string, width: number, height: number, alt?: string }
) {
  const params = {
    Bucket: 'apps-development',
    Key: s3Key,
  };

  const url = s3.getSignedUrl('getObject', params);

  return (
    <Image
      src={url}
      width={width}
      height={height}
      alt={alt}
    />
  );

}
