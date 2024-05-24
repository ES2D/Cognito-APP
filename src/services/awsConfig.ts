import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_LpuMyywK9', // Reemplaza con tu User Pool ID
  ClientId: '84b864a8-40f1-7028-ad7c-e9572cdb0069' // Reemplaza con tu App Client ID
};

export const userPool = new CognitoUserPool(poolData);
