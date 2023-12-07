import { s3 } from '@/lib/s3-client'


export default function getS3Url(
  s3Key: string,
  bucket = ''
) {
  const params = {
    Bucket: process.env.S3_DEFAULT_BUCKET ?? bucket,
    Key: s3Key,
  };

  return s3.getSignedUrl('getObject', params);
}
