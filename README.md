# file-upload-api

Generic file upload infrastructure. Please email me for API key.

### Motivation
AWS S3 is a hassle to work with. Why not abstract it with an API?

### API Endpoints

#### Single File Upload

POST: "https://orangutan-file-upload-api.herokuapp.com/api/file/upload"
HTTP Authorization Header: Bearer xxxxxxxx
HTTP Body: Include File Key Val Pair
Response: File Upload URL

#### Delete Single File

DELETE: "https://orangutan-file-upload-api.herokuapp.com/api/file/"
HTTP Authorization Header: Bearer xxxxxxxx
HTTP Body: Include File Key Name
Response: Success or Failure

#### Get All Files

GET: "https://orangutan-file-upload-api.herokuapp.com/api/file/all"
HTTP Authorization Header: Bearer xxxxxxxx
Response: List of All File Attributes

### Project Roadmap

- Create Image Optimizations (Compression, Preview, etc)
- Create Bulk Upload Routes
- Create Project Specific IAM Managemnt System
