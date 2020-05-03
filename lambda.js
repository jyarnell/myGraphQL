'use strict'
import awsServerlessExpress from 'aws-serverless-express';
import app from './src/app';
const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);