# BI-test

### How to run

1. Add *".env"* file with variables speciefied in *".env-example"*
2. `npm run build`
3. `npm start`


### API specification

#### POST - `/singleFileUpload`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Request** - any file

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Response** - ```{
                  "hashedFile": string ,
                  "sizeInBytes": number
                  }```
