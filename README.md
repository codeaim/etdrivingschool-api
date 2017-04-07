# Introduction
**etdrivingschool-api** is used to provision AWS Web API Gateway and related AWS Lambda functions to support the etdrivingschool-web project.

# Installation
Clone the repository
'''bash
git clone https://github.com/codeaim/etdrivingschool-api.git
'''

Navigate into the project directory
```bash
cd etdrivingschool-api
```

Install dependenices
```bash
npm install
```

Create deployment package
```bash
zip -r deploy.zip index.js node_modules
```

Create AWS S3 bucket
```bash
aws s3api create-bucket --bucket etdrivingschool-api --region eu-west-1 --create-bucket-configuration LocationConstraint=eu-west-1
```

Upload deployment package to AWS S3 bucket
```bash
aws s3 cp deploy.zip s3://etdrivingschool-api/deploy.zip
```

Upload AWS CloudFormation template to AWS S3 bucket
```bash
aws s3 cp template.yml s3://etdrivingschool-api/template.yml
```

Create etdrivingschool-api stack using AWS CloudFormation template
```bash
aws cloudformation create-stack --stack-name etdrivingschool-api --template-url https://s3.amazonaws.com/etdrivingschool-api/template.yml --capabilities CAPABILITY_IAM
```
