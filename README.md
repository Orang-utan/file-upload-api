# file-upload-api

Generic file upload infrastructure. Please email me for API key.

### API Endpoints

#### Single File Upload

POST: "https://orangutan-file-upload-api.herokuapp.com/api/file/upload"
HTTP Authorization Header: Bearer xxxxxxxx
HTTP Body: Include File Key Val Pair
Response: File Upload URL

#### Delete Single File

DElETE: "https://orangutan-file-upload-api.herokuapp.com/api/file/"
HTTP Authorization Header: Bearer xxxxxxxx
HTTP Body: Include File Key Name
Response: Success or Failure

#### Get ALL Files

GET: "https://orangutan-file-upload-api.herokuapp.com/api/file/all"
HTTP Authorization Header: Bearer xxxxxxxx
Response: List of All File Attributes
