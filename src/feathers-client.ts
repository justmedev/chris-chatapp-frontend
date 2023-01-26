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

export interface DatabaseEntry {
    id: number;
}

export interface NullableDatabaseEntry {
    id?: number;
}


export interface JWTPayload {
    strategy?: 'local' | 'jwt';
    username: string;
    email: string;
    password: string;
}

export default feathersClient;
