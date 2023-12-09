import { client } from '../db/client.js';
import crypto from 'node:crypto';

export const singleFileUploadHandler = async (req, res, next) => {
  const hash = crypto.createHash('sha1');
  let responseObject = {};
  let sizeInBytes = 0;
  let hashedFile;

  req.on('data', (data) => {
    hash.update(data);
    sizeInBytes += Buffer.byteLength(data);
  });
  req.on('end', async () => {
    hashedFile = hash.digest('hex');

    try {
      await saveFileData(hashedFile, sizeInBytes);
    } catch (error) {
      res.status(500).send(error);
    }

    responseObject = {
      hashedFile,
      sizeInBytes,
    };

    res.status(200).send(responseObject);
    next();
  });
};

const saveFileData = async (hashedFile, sizeInBytes) => {
  await client.query('INSERT INTO file_data(hash, size) VALUES ($1, $2)', [
    hashedFile,
    sizeInBytes,
  ]);
};
