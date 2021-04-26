import AWS from 'aws-sdk';

const S3_BUCKET = 'pop-collection';
const REGION = 'eu-west-3';

AWS.config.update({
  accessKeyId: 'AKIATCTW4ER4W37S3RAV',
  secretAccessKey: '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',
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

class AwsHelper {
  async uploadFile(file, folder) {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET + '/' + folder,
      Key: file.name,
    };

    const objectUrl =
      'https://' +
      S3_BUCKET +
      '.s3.' +
      REGION +
      '.amazonaws.com/' +
      folder +
      '/' +
      file.name;

    await myBucket.putObject(params).send((err) => {
      if (err) console.log(err);
    });

    return objectUrl;
  }

  async removeFile(fileName, folder) {
    const params = {
      Bucket: S3_BUCKET + '/' + folder,
      Key: fileName,
    };

    myBucket.deleteObject(params).send((err) => {
      if (err) console.log(err);
    });
  }
}

export default new AwsHelper();
