// const uploadPhoto = async (file) => {
//     const gfs = new GridFSStream(mongoose.connection.db, mongoose.mongo);
  
//     const filename = file.originalname;
//     const contentType = file.mimetype;
//     const stream = gfs.createWriteStream({ filename, contentType });
  
//     const readStream = fs.createReadStream(file.path);
//     readStream.pipe(stream);
  
//     return new Promise((resolve, reject) => {
//       stream.on('finish', () => resolve(stream.id));
//       stream.on('error', reject);
//     });
//   };
  
//   const uploadDocument = async (file, documentType) => {
//     const gfs = new GridFSStream(mongoose.connection.db, mongoose.mongo);
  
//     const filename = file.originalname;
//     const contentType = file.mimetype;
//     const stream = gfs.createWriteStream({ filename, contentType });
  
//     const readStream = fs.createReadStream(file.path);
//     readStream.pipe(stream);
  
//     return new Promise((resolve, reject) => {
//       stream.on('finish', () => {
//         resolve({ id: stream.id, documentType });
//       });
//       stream.on('error', reject);
//     });
//   };

const uploadPhoto = async (file) => {
  const gfs = new GridFSStream(mongoose.connection.db, mongoose.mongo);

  const filename = file.originalname;
  const contentType = file.mimetype;
  const stream = gfs.createWriteStream({ filename, contentType });

  const readStream = fs.createReadStream(file.path);
  readStream.pipe(stream);

  try {
    await stream.promise();
    const uploadedPhoto = await GridFSFile.findById(stream.id);
    updatedSelf.photo = uploadedPhoto;
    return true; // No further processing needed
  } catch (error) {
    // Handle error
    console.log('Error uploading photo:', error);
    return false;
  }
};

const uploadDocument = async (file, documentType) => {
  const gfs = new GridFSStream(mongoose.connection.db, mongoose.mongo);

  const filename = file.originalname;
  const contentType = file.mimetype;
  const stream = gfs.createWriteStream({ filename, contentType });

  const readStream = fs.createReadStream(file.path);
  readStream.pipe(stream);

  try {
    await stream.promise();
    updatedSelf.documents.push({ id: stream.id, documentType });
    return true; // No further processing needed
  } catch (error) {
    // Handle error
    console.log('Error uploading document:', error);
    return false;
  }
};

  
  const getPhotoById = async (photoId) => {
    const gfs = new GridFSStream(mongoose.connection.db, mongoose.mongo);
  
    const file = await gfs.findOne({ _id: photoId });
    if (!file) {
      throw new Error('File not found');
    }
  
    const readStream = gfs.createReadStream({ _id: photoId });
    return new Promise((resolve, reject) => {
      readStream.on('data', (data) => resolve(data));
      readStream.on('error', reject);
    });
  };
  
  const getDocumentById = async (documentId) => {
    const gfs = new GridFSStream(mongoose.connection.db, mongoose.mongo);
  
    const file = await gfs.findOne({ _id: documentId });
    if (!file) {
      throw new Error('File not found');
    }
  
    const readStream = gfs.createReadStream({ _id: documentId });
    return new Promise((resolve, reject) => {
      const chunks = [];
      readStream.on('data', (chunk) => chunks.push(chunk));
      readStream.on('end', () => resolve(Buffer.concat(chunks)));
      readStream.on('error', reject);
    });
  };
  
  module.exports = {uploadDocument , uploadPhoto, getDocumentById, getPhotoById}