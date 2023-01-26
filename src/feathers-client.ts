import { feathers } from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import config from "../config";
import authentication from '@feathersjs/authentication-client'

const socket = io(config.backend);
const feathersClient = feathers();

// Set up Socket.io client with the socket
feathersClient.configure(socketio(socket));
feathersClient.configure(authentication());

export default feathersClient;
