const fs = require('fs');
const Client = require('ssh2').Client;
const path = require('path');

const sshConfig = {
    host: '170.187.253.75',
    username: 'root',
    password: '?@123PM?@1983'
};

const imageUpload = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No image file uploaded.');
    }

    const image = req.file;

    // Connect to the SSH server and store the image
    const sshClient = new Client();

    sshClient.on('ready', () => {
        console.log('SSH connection established.');

        sshClient.sftp((err, sftp) => {
            if (err) {
                console.error('Error occurred while establishing SFTP connection:', err);
                return res.status(500).send('Failed to upload the image.');
            }

            const readStream = fs.createReadStream(image.path);
            const remoteImagePath = '/home/pm_images/' + image.originalname;
            const writeStream = sftp.createWriteStream(remoteImagePath);

            writeStream
                .on('close', () => {
                    console.log('Image uploaded successfully.');
                    sshClient.end();

                    const imageURL = `http://your_server_ip/path_to_remote_folder/${image.originalname}`;
                    console.log(imageURL);
                    res.status(200).json({ imageURL });
                })
                .on('error', (err) => {
                    console.error('Error occurred while uploading image:', err);
                    sshClient.end();
                    res.status(500).send('Failed to upload the image.');
                });

            readStream.pipe(writeStream);
        });
    })
        .connect(sshConfig);

}

const remoteFolderPath = '/home/pm_images/';

const getImg = (req, res) => {
    const imageName = 'hod.png';
    const remoteFilePath = path.join(remoteFolderPath, imageName);
    console.log(remoteFilePath);

    const conn = new Client();

    conn.on('ready', () => {
        console.log('SSH connection established.');

        conn.sftp((err, sftp) => {
            if (err) {
                console.error('Error occurred during SFTP session:', err);
                conn.end();
                return;
            }

            // Read the image file from the remote folder
            sftp.readFile(remoteFilePath, (err, data) => {
                if (err) {
                    console.error('Error reading remote file:', err);
                    conn.end();
                    return;
                }

                // Set the appropriate content type for the image
                res.setHeader('Content-Type', 'image/jpeg');

                // Send the image data as the response
                res.send(data);

                // Close the SSH connection
                conn.end();
            });
        });
    });

    conn.on('error', (err) => {
        console.error('SSH connection error:', err);
        res.status(500).json({ error: 'Internal server error' });
    });

    // Connect to the SSH server
    conn.connect(sshConfig);
};

// const imageUpload = (req, res) => {
//     // console.log(req.body);
//     if (!req.file) {
//         return res.status(400).send('No image file uploaded.');
//       }

//       // Access the uploaded file details using req.file
//       const image = req.file;
//       console.log('Uploaded image:', image);

//       // Process the image as needed
//       // For example, you can move the image to a desired location, save its details to a database, etc.

//       res.sendStatus(200);
// }

module.exports = { imageUpload, getImg };