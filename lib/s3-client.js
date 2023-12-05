import { S3 } from 'aws-sdk'

export const s3 = new S3({
  region: 'sa-east-1',
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY
})