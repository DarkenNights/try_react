import React ,{useState} from 'react';
import AWS from 'aws-sdk'

const S3_BUCKET ='pop-collection';
const REGION ='eu-west-3';


AWS.config.update({
  accessKeyId: 'AKIATCTW4ER4W37S3RAV',
  secretAccessKey: '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'
})

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET},
  region: REGION,
})

const UploadImageToS3WithNativeSdk = () => {

  const [progress , setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const uploadFile = (file) => {

    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name
    };

    myBucket.putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100))
      })
      .send((err) => {
        if (err) console.log(err)
      })
  }


  return <div>
    <div>Native SDK File Upload Progress is {progress}%</div>
    <input type="file" onChange={handleFileInput}/>
    <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    <img src="https://pop-collection.s3.eu-west-3.amazonaws.com/api_sandbox_pop_universe.bmp" />
  </div>
}

export default UploadImageToS3WithNativeSdk;