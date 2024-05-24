import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_example', // Reemplaza con tu User Pool ID
  ClientId: 'exampleclientid12345' // Reemplaza con tu App Client ID
};

export const userPool = new CognitoUserPool(poolData);
